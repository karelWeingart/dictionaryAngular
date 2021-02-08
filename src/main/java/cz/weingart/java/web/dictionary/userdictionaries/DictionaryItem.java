package cz.weingart.java.web.dictionary.userdictionaries;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import cz.weingart.java.web.dictionary.lesson.Lesson;
import cz.weingart.java.web.dictionary.partofspeech.PartOfSpeech;

@Entity
@Table(name = "dictionary_entity")
public class DictionaryItem {
	
	@Id	
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String foreignLanguageWord;
	
	private String nativeLanguageTranslation;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "userdictionary_id")
	private UserDictionary userDictionary;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "lesson_id")
	private Lesson lesson;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "partofspeech_id")
	private PartOfSpeech partOfSpeech;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="dictionary_id")
	private UserDictionary dictionary;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getForeignLanguageWord() {
		return foreignLanguageWord;
	}

	public void setForeignLanguageWord(String foreignLanguageWord) {
		this.foreignLanguageWord = foreignLanguageWord;
	}

	public String getNativeLanguageTranslation() {
		return nativeLanguageTranslation;
	}

	public void setNativeLanguageTranslation(String nativeLanguageTranslation) {
		this.nativeLanguageTranslation = nativeLanguageTranslation;
	}

	public Lesson getLesson() {
		return lesson;
	}

	public void setLesson(Lesson lesson) {
		this.lesson = lesson;
	}

	public PartOfSpeech getPartOfSpeech() {
		return partOfSpeech;
	}

	public void setPartOfSpeech(PartOfSpeech partOfSpeech) {
		this.partOfSpeech = partOfSpeech;
	}

	public UserDictionary getUserDictionary() {
		return userDictionary;
	}

	public void setUserDictionary(UserDictionary userDictionary) {
		this.userDictionary = userDictionary;
	}

	@Override
	public String toString() {
		return "DictionaryItem [id=" + id + ", foreignLanguageWord=" + foreignLanguageWord
				+ ", nativeLanguageTranslation=" + nativeLanguageTranslation + ", userDictionary=" + userDictionary
				+ ", lesson=" + lesson + ", partOfSpeech=" + partOfSpeech + "]";
	}

	public UserDictionary getDictionary() {
		return dictionary;
	}

	public void setDictionary(UserDictionary dictionary) {
		this.dictionary = dictionary;
	}
}
