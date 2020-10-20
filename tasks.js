
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  start=text.startsWith("hello");
  st=text.startsWith("add");
  
  rem=text.startsWith("remove");


  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(start){
    hello(text);
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'edit\n'){
    edit();
  }
   else if(text==='add\n'){
    
    console.log("plz add more");
  }
  else if(st){
    
    add(text);
  }
  else if(text === 'list\n'){
    list();
  }
  else if(rem){
    remove();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}

function add(t) {
  substring1= t.substr(4,t.length);
  
  li.push(substring1)
}

  function edit()
  {

    if (text2 === 'edit')
    {
      console.log('error')
    }
    else if(text2 === 'edit new text')
    {
      tasks[-1]='new text'
    }
    else if(text2 === 'edit 1 new text')
    {
      tasks[0]='new text'
    }
  }

/**
 * Says hello
 *
 * @returns {void}
 */
  
  function hello(texxt){
    var s2=texxt.split(" ")
    var rep=texxt.replace("\n","")
    rep=rep.trim()
    if(Boolean(s2[1])==false){
    console.log('hello!')
    }else {
      console.log(rep+"!")
    }
  
  }
  function remove(text) 
  {
    

    if(text==""){
      li.pop()
    }
    else if (text > li.length)
    {
      console.log('array out of bound')
    }
    else
    {
      li.splice()
    }

    
  }

  //list
  li=["task0","task1","task2"];
  function list(){
    
    for(var i=0;i<li.length;i++)
    {

      console.log(i+"-"+li[i]) }

    }




/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * Help command
 *
 * @returns {void}
 */
function help(){
  console.log('Enter hello for hello, quit or exit to exit!')

  console.log('enter hello and a certain text to get it with an exclamantion mark and space handled')
 
  console.log('enter list to display tasks')

  console.log('add a new task to append to array of tasks using add + x')

  console.log('enter remove to remove the last task')

  console.log('enter remove 2 to remove the SECOND element of the list')


  process.exit();
}


// The following line starts the application
startApp("Nour Shams")
  