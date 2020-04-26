import {createSiteMenuTemplate} from "./components/menu";
import {createSortingTemplate} from "./components/sort";
import {createFilterTemplate} from "./components/filter";
import {createBoardTemplate} from "./components/board";
import {createTaskTemplate} from "./components/task";
import {createEditTaskTemplate} from "./components/task-edit";
import {createLoadMoreButtonTemplate} from "./components/load-button";

import {generateTasks} from "./mocks/tasks";
import {generateFilters} from "./mocks/filter";

const TASK_COUNT = 17;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate(filters));
render(siteMainElement, createBoardTemplate());

const siteBoardElement = document.querySelector(`.board`);
const siteTaskListElement = siteBoardElement.querySelector(`.board__tasks`);

render(siteBoardElement, createSortingTemplate(), `afterbegin`);
render(siteTaskListElement, createEditTaskTemplate(tasks[0]));

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks
  .slice(1, showingTasksCount)
  .forEach((task) => render(siteTaskListElement, createTaskTemplate(task)));

render(siteBoardElement, createLoadMoreButtonTemplate());

const loadMoreButton = siteBoardElement.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, function () {
  let prevTaskCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;
  tasks
    .slice(prevTaskCount, showingTasksCount)
    .forEach((task) => render(siteTaskListElement, createTaskTemplate(task)));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
