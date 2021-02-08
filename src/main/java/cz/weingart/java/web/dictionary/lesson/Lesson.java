package cz.weingart.java.web.dictionary.lesson;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import cz.weingart.java.web.dictionary.userdictionaries.DictionaryItem;

@Entity
@Table(name="lesson")
public class Lesson {
	
	@Id	
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;

	private String lessonName;
	
	@OneToMany(mappedBy = "lesson",cascade = CascadeType.ALL,orphanRemoval = true, fetch=FetchType.LAZY)
	private List<DictionaryItem> dictionaryItems = new ArrayList<>();
	
	protected Lesson() {
		
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

	public String getLesson() {
		return lessonName;
	}

	public void setLesson(String lesson) {
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
		return "Lesson [id=" + id + ", lesson=" + lessonName + ", dictionaryItems=" + dictionaryItems + "]";
	}
}
