const FooBar = { name: 'Foo Bar', hospital: 'Heatherwood' };

function getPatients() {
 return Promise.resolve([FooBar]);
}

export default {
  getPatients
}