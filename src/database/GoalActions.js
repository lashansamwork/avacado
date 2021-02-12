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

export const getGoals = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        const goals = realm.objects(GoalSchemaName);
        resolve(goals);
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
        const goal = realm.objects(GoalSchemaName).filtered(`id == ${id}`);
        realm.delete(goal);
        resolve();
      })
      .catch((error) => reject(error));
  });
