<?php
// Connect to the database
$db = new mysqli('localhost', 'root', '', 'ewd');

// Check for errors
if ($db->connect_error) {
 die("Connection failed: " . $db->connect_error);
}

// Define an array of table names
$tables = ['event1', 'event2', 'event3', 'event4', 'event5'];

// Start the HTML output
echo '<!DOCTYPE html>';
echo '<html>';
echo '<head>';
echo '<title>Events</title>';
echo '<!-- Include the Tailwind CSS stylesheet -->';
echo '<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">';
echo '</head>';
echo '<body>';
echo '<div class="relative overflow-x-auto shadow-md sm:rounded-lg">';
echo '<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">';
echo '<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">';
echo '<tr>';
echo '<th scope="col" class="px-6 py-3">Date</th>';
echo '<th scope="col" class="px-6 py-3">Time</th>';
echo '<th scope="col" class="px-6 py-3">Location</th>';
echo '<th scope="col" class="px-6 py-3">Event Description</th>';
echo '</tr>';
echo '</thead>';
echo '<tbody>';

// Loop through the tables and retrieve the events from each one
foreach ($tables as $table) {
 // Query the database to retrieve the events
 $sql = "SELECT * FROM $table";
 $result = $db->query($sql);

 // Check for errors
 if (!$result) {
 die("Error: " . $db->error);
 }

 // Loop through the results and output each event as a row in the table
 while ($row = $result->fetch_assoc()) {
 echo '<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">';
 echo '<td class="px-6 py-4">' . $row['COL 1'] . '</td>';
 echo '<td class="px-6 py-4">' . $row['COL 2'] . '</td>';
 echo '<td class="px-6 py-4">' . $row['COL 3'] . '</td>';
 echo '<td class="px-6 py-4">' . $row['COL 4'] . '</td>';
 echo '</tr>';
 }
}

// End the HTML output
echo '</tbody>';
echo '</table>';
echo '</div>';
echo '</body>';
echo '</html>';

// Close the database connection
$db->close();
?>
