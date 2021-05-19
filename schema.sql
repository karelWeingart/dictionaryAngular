#DB schema for the application - MariaDb
create or replace table dictionary_entity
(
	ID bigint auto_increment
		primary key,
	FOREIGN_LANGUAGE_WORD text null,
	NATIVE_LANGUAGE_TRANSLATION text null,
	USERDICTIONARY_ID bigint null,
	LESSON_ID bigint null,
	PARTOFSPEECH_ID bigint null,
	DATE_CREATED date null
);

create or replace table hibernate_sequence
(
	next_not_cached_value bigint(21) not null,
	minimum_value bigint(21) not null,
	maximum_value bigint(21) not null,
	start_value bigint(21) not null comment 'start value when sequences is created or value if RESTART is used',
	increment bigint(21) not null comment 'increment value',
	cache_size bigint(21) unsigned not null,
	cycle_option tinyint(1) unsigned not null comment '0 if no cycles are allowed, 1 if the sequence should begin a new cycle when maximum_value is passed',
	cycle_count bigint(21) not null comment 'How many cycles have been done'
);

create or replace table lesson
(
	ID bigint auto_increment
		primary key,
	USERDICTIONARY_ID bigint null,
	LESSON_NAME varchar(255) null,
	DATE_CREATED date null
);

create or replace table part_of_speech
(
	ID bigint auto_increment
		primary key,
	NAME varchar(255) null
);

create or replace table user_dictionary
(
	ID bigint auto_increment
		primary key,
	DICTIONARY_NAME varchar(255) null,
	USER_ID bigint not null
);

create or replace table users
(
	ID bigint auto_increment
		primary key,
	USER_NAME varchar(255) null
);