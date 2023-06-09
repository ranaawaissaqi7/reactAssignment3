
import './App.css';
import AddUniqueKey from './components/addUniqueKey/AddUniqueKey';
import ParentComponents from './components/parentComponent/ParentComponents';
import ResUseAbleListComponent from './components/reUseAbleListComponent/ResUseAbleListComponent';
import RenderListName from './components/renderListName/RenderListName';
import Task5 from './components/task5/Task5';
import Task4 from './components/taskt4/Task4';

function App() {
  const cityName=["faisalabad","karachi","lahore","islamabad"];


  const items = [
    { id: 1, name: 'John', age: 25, gender: 'Male' },
    { id: 2, name: 'Jane', age: 30, gender: 'Female' },
    { id: 3, name: 'Alex', age: 28, gender: 'Male' },
  ];
  return (
    <>
    <RenderListName/>
    <ResUseAbleListComponent cityName={cityName}/>
    <AddUniqueKey cityName={cityName}/>
    <Task4 items={items}/>
    <Task5/>
    <ParentComponents/>
    </>
  );
}

export default App;
