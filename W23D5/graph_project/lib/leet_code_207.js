// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function buildGraph(list) {
  const graph = {};
  list.forEach(prereq => {
    const [course, pre] = prereq.map(String);
    if (course in graph) {
      graph[course].push(pre);
    } else {
      graph[course] = [pre];
    }

    if (!(pre in graph)) {
      graph[pre] = [];
    }
  });

  return graph;
}

function canFinish(numCourses, prerequisites) {
  const graph = buildGraph(prerequisites);
  const completed = new Set();
  const total_courses = Object.keys(graph).length;

  let eligible = true;
  while (eligible) {
    eligible = false;

    for (let course in graph) {
      const prereq_met = graph[course].every(prereq => completed.has(prereq));
      if (!completed.has(course) && prereq_met) {
        completed.add(course);
        eligible = true;
      }
    }
  }

  return completed.size === total_courses;
}
