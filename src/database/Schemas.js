export const GoalSchemaName = 'Goal';
export const TaskSchemaName = 'Task';
export const UserSchemaName = 'User';

export const GoalSchema = {
  name: 'Goal',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string?',
    description: 'string?',
    category: 'string?',
    when: 'int?',
    tasks: 'Task[]',
  },
};

export const TaskSchema = {
  name: 'Task',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string?',
    epochTime: 'int?',
    daysToRepeat: {type: 'string[]', optional: true},
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
  schemaVersion: 20,
};
