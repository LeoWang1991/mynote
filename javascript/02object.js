/**
 * 创建Object的方式
 */

const o0 = {};

const o1 = new Object();

const o2 = Object.create()

function createPerson(name, age) {
  const o = new Object();
  o.name = name;
  o.job = job;

  return o;
}
const o3 = createPerson('xiaofei', 12);
