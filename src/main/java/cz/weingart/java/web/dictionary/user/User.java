package cz.weingart.java.web.dictionary.user;

import java.util.List;

import javax.persistence.*;

import cz.weingart.java.web.dictionary.userdictionaries.UserDictionary;

@Entity
@Table(name="USERS")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(columnDefinition = "integer auto_increment")
	private Long id;
	private String userName;
	
	@OneToMany (mappedBy = "user",cascade = CascadeType.ALL, orphanRemoval = true)
	List<UserDictionary> userDictionaries;
	
	protected User() {
	}

	public User(User user) {
		this.userName = user.userName;
		this.id = user.id;
	}
	
	public User(String username) {
		this.userName = username;
	}
	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}

	public List<UserDictionary> getUserDictionaries() {
		return userDictionaries;
	}

	public void setUserDictionaries(List<UserDictionary> userDictionaries) {
		this.userDictionaries = userDictionaries;
	}

	@Override
	public String toString() {
		return "User [id=" + id
				+ ", userName=" + userName + "]";
	}

	
}
