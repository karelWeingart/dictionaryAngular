# dictionaryAngular

This is web application that can be used to maintain dictionaries for users. It was developed to be run on local networks only as no authorization and secure user management is implemented. I run it on Raspberry 4 at home for my children.

#Installation

##Database
Install MariaDB on the device on which you want to run the app. Follow these instructions https://mariadb.com/kb/en/getting-installing-and-upgrading-mariadb/. I tested this app with version 10.3.27 which supports sequences. For versions of mariaDb not supporting sequences, there would be need to change the backend java jpa entities declarations to support AUTO_INCREMENT.
Create database in the installed db. Follow this instructions for this: https://mariadb.com/kb/en/create-database/. Generally it doesnot matter how the db is named. Run schema.db script from this repository.
