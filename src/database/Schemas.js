export const GoalSchemaName = 'Goal';
export const TaskSchemaName = 'Task';

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

export const databaseOptions = {
  path: 'test.realm',
  schema: [GoalSchema, TaskSchema],
  schemaVersion: 5,
};
