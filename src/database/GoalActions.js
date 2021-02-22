import {databaseOptions, GoalSchemaName} from './Schemas';
import Realm from 'realm';

export const addToGoal = (newGoal) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const lastGoal = realm.objects(GoalSchemaName).sorted('id', true)[0];
          const id = lastGoal == null ? 1 : lastGoal.id + 1;
          realm.create(GoalSchemaName, {id: id, ...newGoal});
          resolve(newGoal);
        });
      })
      .catch((error) => reject(error));
  });

export const getGoals = (goalId) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        if (typeof goalId === 'number') {
          const goals = realm
            .objects(GoalSchemaName)
            .filtered(`id == ${goalId}`);
          resolve(goals);
        } else {
          const goals = realm.objects(GoalSchemaName);
          resolve(goals);
        }
      })
      .catch((error) => reject(error));
  });

export const updateGoal = (id, newGoal) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        const goal = realm.objects(GoalSchemaName).filtered(`id == ${id}`);
        Object.keys(newGoal).map((key) => {
          goal[key] = newGoal[key];
        });
        resolve(newGoal);
      })
      .catch((error) => reject(error));
  });

export const deleteGoal = (id) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const goal = realm.objectForPrimaryKey(GoalSchemaName, id);
          realm.delete(goal);
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const deleteTask = (goalId, taskId) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const goal = realm.objectForPrimaryKey(GoalSchemaName, goalId);
          goal.tasks = goal.tasks.filter((item) => {
            if (item.id === taskId) {
              return false;
            } else {
              return true;
            }
          });
          resolve(goal);
        });
      })
      .catch((error) => reject(error));
  });

export const updateTask = (goalId, task) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const goal = realm.objectForPrimaryKey(GoalSchemaName, goalId);
          goal.tasks = goal.tasks.map((item) => {
            if (item.id === task.id) {
              return task;
            } else {
              return item;
            }
          });
          resolve(goal);
        });
      })
      .catch((error) => reject(error));
  });

export const addNewTask = (goalId, task) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const goal = realm.objectForPrimaryKey(GoalSchemaName, goalId);
          const newTask = {...task, id: goal.tasks.length};
          goal.tasks = [...goal.tasks, newTask];
          resolve(goal);
        });
      })
      .catch((error) => reject(error));
  });
