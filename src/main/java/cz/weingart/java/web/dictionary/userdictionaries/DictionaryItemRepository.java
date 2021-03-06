package cz.weingart.java.web.dictionary.userdictionaries;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import cz.weingart.java.web.dictionary.lesson.Lesson;
import cz.weingart.java.web.dictionary.partofspeech.PartOfSpeech;

public interface DictionaryItemRepository extends CrudRepository<DictionaryItem, Long>{
	
	public List<DictionaryItem> findDictionaryItemsByUserDictionary(UserDictionary userDictionary);
	public List<DictionaryItem> findDictioaryItemsByUserDictionaryAndLesson(UserDictionary userDictionary, Lesson lesson);
	public List<DictionaryItem> findDictioaryItemsByUserDictionaryAndPartOfSpeech(UserDictionary userDictionary, PartOfSpeech partOfSpeech);
	public List<DictionaryItem> findDictionaryItemsByLesson(Lesson lesson);
	
}
