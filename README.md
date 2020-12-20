# journey

Goals
  Tasks, tracker

Quests

Rewards

Energy

Achievements
Rewards (new goals/tasks)




scores
- strength
- stamina
- intellect
- social
- spirit

game ~ (id, name, description)

quest - (id, name, title)
reward ~ (id, name, description)

task - (name, created, updated, completed, ...scores)

The idea is that you perform tasks which drive you towards completing a quest.
Quests completions define Game fulfillment.

When a quest is completed you unlock a reward (i.e. it becomes a quest)

I did a task
...it was N difficult (1-3)
...it's nature was <intellectual, physical, social emotional>

Status
- quest completions ~ Int
- level ~ task points; exponential
  - pts_i = pts_i-1 * 1.5
- achievements ~ quests completed per game
  - titles
    - drawn from quests
    - multiples, blaver x4
  - scope = number of quests
