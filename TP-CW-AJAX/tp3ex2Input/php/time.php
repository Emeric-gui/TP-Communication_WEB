<?php
$date = getdate();

$hour = $date['hours'];
$minutes = $date['minutes'];
$seconds = $date['seconds'];

$array = array("Il est : ".$hour.":".$minutes.":".$seconds, array("hours"=>$hour, "minutes"=>$minutes,"seconds"=>$seconds));
$json = json_encode($array);
print_r($json);
?>