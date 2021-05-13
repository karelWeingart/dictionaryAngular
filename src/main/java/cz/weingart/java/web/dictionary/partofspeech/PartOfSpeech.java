package cz.weingart.java.web.dictionary.partofspeech;

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
@Table(name= "part_of_speech")
public class PartOfSpeech {
	
	@Id	
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	@OneToMany(mappedBy = "partOfSpeech",cascade = CascadeType.ALL,orphanRemoval = true, fetch=FetchType.LAZY)
	private List<DictionaryItem> dictionaryItems = new ArrayList<>();

	protected PartOfSpeech() {
		
	}
	
	public PartOfSpeech(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<DictionaryItem> getDictionaryItems() {
		return dictionaryItems;
	}

	public void setDictionaryItems(List<DictionaryItem> dictionaryItems) {
		this.dictionaryItems = dictionaryItems;
	}

	@Override
	public String toString() {
		return "PartOfSpeech [id=" + id + ", name=" + name + ", dictionaryItems=" + dictionaryItems + "]";
	}
}
