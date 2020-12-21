CREATE TABLE "quests" (
	"parent_id"	INTEGER NOT NULL DEFAULT 0,
	"name"	TEXT NOT NULL DEFAULT 'New Quest',
	"description"	TEXT
);


CREATE TABLE "tasks" (
	"quest_id"	INTEGER NOT NULL DEFAULT 0,
	"name"	TEXT NOT NULL DEFAULT 'New Task',
	"created"	TEXT NOT NULL DEFAULT '2000-01-01 00:00:00.000',
	"updated"	TEXT NOT NULL DEFAULT '2000-01-01 00:00:00.000',
	"completed"	TEXT,
	"emotion"	INTEGER DEFAULT 2,
	"intellect"	INTEGER DEFAULT 2,
	"physique"	INTEGER DEFAULT 2,
	"social"	INTEGER DEFAULT 2
);

CREATE TRIGGER task_insert_timestamp
	AFTER INSERT ON tasks
BEGIN
	UPDATE tasks SET 
    created = datetime('now'),
    updated = datetime('now') 
	WHERE ROWID = new.ROWID;
END

CREATE TRIGGER task_update_timestamp
	AFTER UPDATE ON tasks
BEGIN
	UPDATE tasks SET updated = datetime('now') 
	WHERE ROWID = new.ROWID;
END
