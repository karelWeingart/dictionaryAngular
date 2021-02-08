package cz.weingart.java.web.dictionary.userdictionaries;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import cz.weingart.java.web.dictionary.user.User;

public interface UserDictionaryRepository extends CrudRepository<UserDictionary, Long> {
	public List<UserDictionary> findByUser(User user);
}
