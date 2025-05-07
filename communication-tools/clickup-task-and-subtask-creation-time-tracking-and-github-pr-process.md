# Clickup Task and Subtask Creation, Time Tracking, and GitHub PR Process

1. **Task Creation**:
   * Tasks are created by **Aleks** and **Guyi** and must include time estimates and clearly defined exit criteria.
2. **Subtask Creation & Time Estimates**:
   * Subtasks should be created by the actioning developer during task execution.
   * The following time guidelines apply:
     * **Small Subtasks**: \~2 hours
     * **Medium Subtasks**: \~4 hours
     * **Large Subtasks**: \~8 hours
   * If a subtask takes longer than 8 hours, it should be broken down into smaller, more manageable subtasks.
3. **Handling Incorrect Estimates**:
   * If the actioning developer believes the task's estimate is significantly off by **more than one-third (33%)**, they must escalate this to **Aleks** and **Guyi** **before** proceeding with the task.
   * A synchronous meeting will be scheduled to replan and revise the estimate if necessary.
4. **Subtask Acceptance**:
   * **Aleks** is responsible for accepting completed subtasks from developers and will ensure the total hours approximately match the original task estimate.
   * **If the total hours deviate from the estimate**, **Aleks will provide an explanation** in the **task review comments** before submitting the task to **Guyi** for final completion and acceptance.
5. **New Requirements**:
   * If new requirements are discovered that require significant additional work not covered by the current tasks, they should be escalated to **Aleks** or **Guyi**. A planning process will be initiated to create new tasks as needed.
6. **GitHub Pull Request and ClickUp Task ID**:
   * To ensure traceability and better workflow management, it is mandatory to include the relevant **ClickUp Task ID** in every GitHub pull request.
   * Time spent should be logged against each subtask, and GitHub pull requests (PRs) should be linked to the corresponding subtask.
   * **How to Add a ClickUp Task ID in a GitHub PR**:
     * Include the ClickUp Task ID in the title or description of the PR.
     * Format example: `#TASKID - Description of changes.`
     * Ensure the ClickUp Task ID corresponds to the specific task related to the code changes in the PR.
     * Example: `#CU-1234 - Fix login page bug.`
