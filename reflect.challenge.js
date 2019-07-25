
let course = {

}
if (Reflect.defineProperty(course, 'name', {value:'Javascript'})) //by default writable is false. 
{
    console.log('property(name) created!');
  } else {
    console.log('problem creating property(name)');
  }
  
  console.log(course.name);
  if (Reflect.defineProperty(course, 'duration', {value:'3 hours',enumerable:true,configurable:true})) {
    console.log('property(duration) created!');
  } else {
    console.log('problem creating property(duration)');
  }
  
  console.log(course.duration);
  Reflect.deleteProperty(course, 'duration');

  console.log(course.duration);
  console.log(Reflect.getOwnPropertyDescriptor(course, 'name'));
// use  reflect API to define property,  delete a property, getOwnpropertydescriptor details
// property to define - name with value as "Javascript", make it read only (writable : false)
// property to define - duration with value as "3 hours", make it read only (writable : false)
// getOwnpropertydescriptor - check and print metadata about name property
