package cz.weingart.java.web.dictionary.userdictionaries;

import javax.persistence.*;

import cz.weingart.java.web.dictionary.lesson.Lesson;
import cz.weingart.java.web.dictionary.partofspeech.PartOfSpeech;
import org.hibernate.annotations.Type;

import java.time.LocalDate;

@Entity
@Table(name = "dictionary_entity")
public class DictionaryItem {
	
	@Id	
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;

	@Type(type="text")
	private String foreignLanguageWord;

	@Type(type="text")
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
	
	/*@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="dictionary_id")
	private UserDictionary dictionary;*/

	@Column(name = "date_created", columnDefinition = "DATE")
	private LocalDate dateCreated;

	public LocalDate getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(LocalDate dateCreated) {
		this.dateCreated = dateCreated;
	}

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

	/*public UserDictionary getDictionary() {
		return dictionary;
	}

	public void setDictionary(UserDictionary dictionary) {
		this.dictionary = dictionary;
	}*/
}
