<html>
    <head>
        <script>
            var fruits = [
                "apple",
                "mango",
                "banana",
                "grapes",
                "guava"
            ];
        </script>
    </head>
    <body>
        <script>
            document.write("<h3>List Of Array Items</h3>")
            document.write("<hr />");
            document.write("<ul>");
            for(var i=0;i<fruits.length;i++){
                document.write("<li>"+fruits[i]+"</li>");
            }
            document.write("</ul>");
            document.write("<hr />")
            
            var size=fruits.length;
            document.write("Size of Array : "+size+"<br />");
            
            var first = fruits[0];
            document.write("First Item of Array : "+first+"<br /><br />");
            
            fruits.forEach(function(item,index,array){
                document.write("Fruits["+index+"] = "+item+"<br />");
            });
            
            
            //Insert Item at last
            fruits.push("orange");
            document.write("<br />")
            fruits.forEach(function(item,index,array){
                document.write("Fruits["+index+"] = "+item+"<br />");
            });
            
             //Insert Item at Front
            fruits.unshift("cherry");
            document.write("<br />")
            fruits.forEach(function(item,index,array){
                document.write("Fruits["+index+"] = "+item+"<br />");
            });
            
            //Remove Item from Last
            fruits.pop();
            document.write("<br />")
            fruits.forEach(function(item,index,array){
                document.write("Fruits["+index+"] = "+item+"<br />");
            });
            
            //Remove Item from Front
            fruits.shift();
            document.write("<br />")
            fruits.forEach(function(item,index,array){
                document.write("Fruits["+index+"] = "+item+"<br />");
            });
            
            
            //Finding Index of Item
            var index = fruits.indexOf("banana");
            document.write("<br />");
            document.write("Index of banana : "+index+"<br />");
            
            
            //Removing any item from List
            document.write("<br />");
            var pos = fruits.indexOf("banana");
            fruits.splice(pos,1)
            fruits.forEach(function(item,index,array){
                document.write("Fruits["+index+"] = "+item+"<br />");
            });
        </script>
    </body>
</html>
