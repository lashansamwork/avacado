import {databaseOptions, GoalSchemaName, TaskSchemaName} from './Schemas';
import Realm from 'realm';
import moment from 'moment';
import PushNotification from 'react-native-push-notification';
export const addToGoal = (newGoal) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const lastGoal = realm.objects(GoalSchemaName).sorted('id', true)[0];
          const lastTask = realm.objects(TaskSchemaName).sorted('id', true)[0];
          console.log(
            '🚀 ~ file: GoalActions.js ~ line 12 ~ realm.write ~ lastTask',
            lastTask,
          );
          const id = lastGoal == null ? 1 : lastGoal.id + 1;
          const taskId = lastTask == null ? 1 : lastTask.id + 1;
          const filteredGoal = {
            ...newGoal,
            tasks: newGoal.tasks.map((task, index) => {
              return {...task, id: index + taskId};
            }),
            id: id,
          };

          filteredGoal.tasks.forEach((task) => {
            setAlarmsTasks(task);
          });

          realm.create(GoalSchemaName, filteredGoal);
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
            .filtered(`id == ${goalId}`)
            .toJSON();
          resolve(goals);
        } else {
          const goals = realm.objects(GoalSchemaName).toJSON();
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
          removeAlarmsAllTasks(goal.tasks);
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
              removeAlarmsTasks(item);
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
          removeAlarmsTasks(task);
          setTimeout(() => {
            setAlarmsTasks(task);
          }, 5000);
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
          setAlarmsTasks(newTask);
          goal.tasks = [...goal.tasks, newTask];
          resolve(goal);
        });
      })
      .catch((error) => reject(error));
  });

export const removeAlarmsAllTasks = (tasks) => {
  tasks.forEach((task) => {
    removeAlarmsTasks(tasks);
  });
};

export const removeAlarmsTasks = (task) => {
  if (task.alarms && task.alarms.length > 0) {
    task.daysToRepeat.forEach((day, index) => {
      PushNotification.cancelLocalNotifications({id: `${task.name}-${index}`});
    });
  }
};

export const setAlarmsTasks = async (task) => {
  const daysToRepeat = task.daysToRepeat;
  const readableTime = moment(task.epochTime);
  const hours = readableTime.format('HH');
  const mintues = readableTime.format('mm');
  daysToRepeat.forEach(async (day, index) => {
    const nextAvailableDate =
      findNextInstanceInDaysArray([index]).format('DD-MM-YYYY') +
      ` ${hours}:${mintues}:00`;
    if (nextAvailableDate) {
      const epochTime = moment(
        nextAvailableDate,
        'DD-MM-YYYY HH:mm:ss',
      ).valueOf();
      const alarmNotifData = {
        id: `${task.name}-${index}`,
        title: 'Avaca.do',
        date: new Date(epochTime),
        message: task.name,
        schedule_type: 'repeat',
        repeat_interval: 'weekly',
        loop_sound: true,
        small_icon: 'ic_launcher',
      };
      createNewAlert(alarmNotifData);
    }
  });
};

export const createNewAlert = (alarmNotifData) => {
  // console.log(
  //   '🚀 ~ file: GoalActions.js ~ line 177 ~ createNewAlert ~ alarmNotifData',
  //   moment(alarmNotifData.date).format('DD-MM-YYYY HH:mm:ss'),
  // );

  PushNotification.localNotificationSchedule({
    ...alarmNotifData, // in 60 secs
    allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
  });
};

const isThisInFuture = (targetDayNum) => {
  // param: positive integer for weekday
  // returns: matching moment or false
  const todayNum = moment().isoWeekday();

  if (todayNum <= targetDayNum) {
    return moment().isoWeekday(targetDayNum);
  }
  return false;
};

const findNextInstanceInDaysArray = (daysArray) => {
  // iterate the array of days and find all possible matches
  const tests = daysArray.map(isThisInFuture);
  // select the first matching day of this week, ignoring subsequent ones, by finding the first moment object
  const thisWeek = tests.find((sample) => {
    return sample instanceof moment;
  });
  // but if there are none, we'll return the first valid day of next week (again, assuming the days are sorted)
  return thisWeek || moment().add(1, 'weeks').isoWeekday(daysArray[0]);
};
