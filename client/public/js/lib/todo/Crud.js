
const Crud = {
  /**
   * 
   * @param
   *
   * @return
   */  
  getList : async function(obj)
  {
    try {   
console.log("#getList");    
console.log(obj);    
      const response = await fetch(obj.url+ "/todos/index");
      const json = await response.json();
      return json;
//      return [];
    } catch (e) {
      console.error(e);
    }
  } 
}

