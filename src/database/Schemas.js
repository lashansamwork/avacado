export const GoalSchemaName = 'Goal';
export const TaskSchemaName = 'Task';
export const UserSchemaName = 'User';

export const GoalSchema = {
  name: 'Goal',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    category: 'string',
    tasks: 'Task[]',
  },
};

export const TaskSchema = {
  name: 'Task',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    dataTimes: 'int[]',
  },
};

export const UserSchema = {
  name: 'User',
  properties: {
    name: 'string',
  },
};

export const databaseOptions = {
  path: 'test.realm',
  schema: [GoalSchema, TaskSchema, UserSchema],
  schemaVersion: 6,
};
