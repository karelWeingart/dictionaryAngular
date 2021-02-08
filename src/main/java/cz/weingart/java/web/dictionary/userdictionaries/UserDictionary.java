package cz.weingart.java.web.dictionary.userdictionaries;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import cz.weingart.java.web.dictionary.user.User;

@Entity
@Table(name = "user_dictionary")
public class UserDictionary {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String dictionaryName;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@JsonIgnore
    private User user;
	
	@OneToMany(mappedBy = "userDictionary",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
	private List<DictionaryItem> items = new ArrayList<>();
	
	protected UserDictionary() {
		
	}
	
	public UserDictionary (String dictionaryName, User user) {
		this.dictionaryName = dictionaryName;
		this.user = user;				
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDictionaryName() {
		return dictionaryName;
	}

	public void setDictionaryName(String dictionaryName) {
		this.dictionaryName = dictionaryName;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "UserDictionary [id=" + id + ", dictionaryName=" + dictionaryName + ", user=" + user + "]";
	}
	

}
