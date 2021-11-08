# Final Project Idea

Plan My Day is a responsive calendar for spontaneous individuals who also have a structured approach to their daily agenda. The application will ask the user for a variety of their interests and events. A tentative list is as follows – 

1.	Restaurant preference – fast-food vs. dine-in
2.	Cuisine type – Italian, Chinese (select multiple)
3.	Important events – tests, quizzes, get togethers, virtual events with links
4.	Class schedules if applicable – input same way as above but with a recurring option
5.	Primary location – for restaurants, may be different from location of class 

The user input will be gained through a series of input fields and stored in two HashMap data structures. One HashMap will store user details with the following key and values of “Restaurant Preference”:[p1, p2], “Cuisine Type”:[c1, c2, c3] and “Location”:[p1, s2]. The second map will store the following key “Event Name” followed by Event which is an object of the Event class and the value of the specific event name. The restaurant preferences, cuisine type and location are collected to be used with the Yelp API to find restaurants of the specified types in the desired location. The result of both structures being populated will then create a calendar for the current week on arbitrary things to do. 

For example, restaurant preference of dine-in, with cuisine-type of Italian, important events of upcoming birthday party, exams in two classes (dates filled in with time), and location of Hofstra University will generate a calendar that suggests time to study, Italian restaurants nearby, and the events all displayed on the same calendar. 


