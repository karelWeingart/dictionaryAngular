package cz.weingart.java.web.dictionary.lesson;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import cz.weingart.java.web.dictionary.userdictionaries.DictionaryItem;
import cz.weingart.java.web.dictionary.userdictionaries.UserDictionary;

@Entity
@Table(name= "lesson")
public class Lesson {
	
	@Id	
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;

	@OneToMany(mappedBy = "lesson",cascade = CascadeType.ALL,orphanRemoval = true, fetch=FetchType.EAGER)
	@JsonIgnore
	private List<DictionaryItem> dictionaryItems = new ArrayList<>();

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "userdictionary_id")
	private UserDictionary dictionary;

	private String lessonName;

	@Column(name = "date_created", columnDefinition = "DATE")
	private LocalDate dateCreated;

	protected Lesson() {
	}

	public LocalDate getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(LocalDate dateCreated) {
		this.dateCreated = dateCreated;
	}

	public void setDictionary(UserDictionary dictionary) {
		this.dictionary = dictionary;
	}

	public UserDictionary getDictionary() {
		return dictionary;
	}

	public Lesson(String lesson) {
		this.lessonName = lesson;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLessonName() {
		return lessonName;
	}

	public void setLessonName(String lesson) {
		this.lessonName = lesson;
	}

	public List<DictionaryItem> getDictionaryItems() {
		return dictionaryItems;
	}

	public void setDictionaryItems(List<DictionaryItem> dictionaryItems) {
		this.dictionaryItems = dictionaryItems;
	}

	@Override
	public String toString() {
		return "Lesson [id=" + id + ", lessonName="
				+ lessonName + ", dictionaryItems="
				+ dictionaryItems + ", dictionary="+ dictionary +"]";
	}
}
