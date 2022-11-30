package cz.weingart.java.web.dictionary;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import cz.weingart.java.web.dictionary.lesson.Lesson;
import cz.weingart.java.web.dictionary.lesson.LessonRepository;
import cz.weingart.java.web.dictionary.partofspeech.PartOfSpeech;
import cz.weingart.java.web.dictionary.partofspeech.PartOfSpeechRepository;
import cz.weingart.java.web.dictionary.user.User;
import cz.weingart.java.web.dictionary.user.UserRepository;
import cz.weingart.java.web.dictionary.userdictionaries.DictionaryItemRepository;
import cz.weingart.java.web.dictionary.userdictionaries.UserDictionary;
import cz.weingart.java.web.dictionary.userdictionaries.UserDictionaryRepository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
@EnableTransactionManagement
public class DictionaryApplication {
	
	private static final Logger log = LoggerFactory.getLogger(DictionaryApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(DictionaryApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(UserRepository repository,UserDictionaryRepository dictRepository, LessonRepository lessonRepository, PartOfSpeechRepository partRepository, DictionaryItemRepository itemRepository) {
	return (args) -> {
	      
	      /*repository.save(new User("Mia"));
	      lessonRepository.save(new Lesson("test"));
	      partRepository.save(new PartOfSpeech("podstatne jmeno"));
	      

	      
	      
	      
	      //repository.deleteById(1l);
	      
	      log.info("User found");
	      log.info("-------------------------------");
	      User lastUser =  null;
	      for (User user : repository.findAll()) {
	        log.info(user.toString());
	        lastUser= user;
	      }
	      log.info("");
	      dictRepository.save(new UserDictionary("English - Czech", lastUser));
	      
	      log.info("Dictionaries");
	      log.info("-------------------------------");
	      for (UserDictionary dict : dictRepository.findAll()) {
	        log.info(dict.toString());
	        
	        
	      }
	      log.info("");*/

	    };
	    
	    
	
	}

	/*@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("http://localhost:4200", "http://localhost", "192.168.*");
			}
		};
	}*/

}
