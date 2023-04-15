let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((element)=>{console.log(element)})
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((element)=>{console.log(element)})
  }
  
  function addData() {
    //Write your code here, just console.log
    let arr2={id:4,name:"susan",age:"20",profession:"intern"}
    arr.push(arr2)
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let fa=arr.filter((element)=>{return element.profession== 'admin'})
    arr=[...fa];
    console.log(arr);
  }
  
  function concatenateArray(arr2) {
    //Write your code here, just console.log
    arr.concat(arr2)
    console.log(arr);
  }
   PrintDeveloperbyMap()
    PrintDeveloperbyForEach() 
   addData()
     removeAdmin()
     concatenateArray()