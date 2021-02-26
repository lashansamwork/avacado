import {databaseOptions, UserSchemaName} from './Schemas';
import Realm from 'realm';

export const addUser = (user) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(UserSchemaName, user);
          resolve(user);
        });
      })
      .catch((error) => reject(error));
  });
export const getUser = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const user = realm.objects(UserSchemaName);
          resolve(user);
        });
      })
      .catch((error) => reject(error));
  });
