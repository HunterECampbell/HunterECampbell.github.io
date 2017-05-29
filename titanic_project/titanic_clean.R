#change all embarked NA to S
titanic_original$embarked[is.na(titanic_original$embarked)] <- "S"

#calculate the mean of the age column and fill in the blanks
mean(titanic_original$age, na.rm = TRUE)  #equals 29.88113
titanic_original$age[is.na(titanic_original$age)] <- mean(titanic_original$age, na.rm = TRUE)
#median() seems that it would have done the same thing as mean()?  I tested it after I applied mean(), so I'm not quite sure if median() would have had the same results
#I would have stuck with mean() over median() because the average seems more applicable in this case.

#replacing NA values in the boat column with "None"
titanic_original$boat[is.na(titanic_original$boat)] <- "None"

#create a has_cabin_number binary column
titanic_original <- mutate(titanic_original, has_cabin_number = ifelse(is.na(titanic_original$cabin), 0, 1))


