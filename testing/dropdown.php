<!DOCTYPE html>
<head>

</head>
<body>
    <form>
        <select>
        <option selected="selected">"input"</option>
    <?php
        $itemlist = array("a", "b", "c");
        foreach($itemlist as $item){
            echo "<option value='$item'>$item</option>";
        };
        ?>
    </select>
    <input type="submit" value="Submit">
</form>
</body>
</html>
