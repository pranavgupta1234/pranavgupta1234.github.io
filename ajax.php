<?php

    if(isser($_REQUEST["name"])){
        $name = $_REQUEST['name'];
        echo "Welcome".$name;
    }


/*
   $host="localhost";
   $password="password";
   $user="root";
   $c = mysqli_connect($host, $user, $password) or die("Cannot Connect");
   mysqli_select_db($c,"my_db") or die("Cannot connect database");
       $q=  mysqli_query($c, "SELECT * from number;"); 
       if(mysqli_num_rows($q)!=0){
           while($f=mysqli_fetch_array($q)){
               $val=$f['value'];
           }
       }*/
?>  
<!-- <!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            Ajax Transaction
        </title>
    </head>
    <body>
        <div>
         
        </div>
        <h1>
            <button type="button" name="add" id="add">Increment</button>
        </h1>
    </body>-->