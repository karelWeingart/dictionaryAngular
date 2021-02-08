package cz.weingart.java.web.dictionary.userdictionaries;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import cz.weingart.java.web.dictionary.lesson.Lesson;
import cz.weingart.java.web.dictionary.partofspeech.PartOfSpeech;

public interface DictionaryItemRepository extends CrudRepository<DictionaryItem, Long>{
	
	public List<DictionaryItem> findDictionaryItemsByDictionary(UserDictionary dictionary);
	public List<DictionaryItem> findDictioaryItemsByDictionaryAndLesson(UserDictionary dictionary, Lesson lesson);
	public List<DictionaryItem> findDictioaryItemsByDictionaryAndPartOfSpeech(UserDictionary dictionary, PartOfSpeech partOfSpeech);
	
}
