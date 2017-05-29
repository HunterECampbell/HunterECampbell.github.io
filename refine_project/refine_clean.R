#this was to alphabetize the company column
refine_original <- refine_original %>% arrange(company)

#this was to make the company column more readable
refine_original$company <- gsub("akzo|ak zo|akz0", "akzo", refine_original$company, ignore.case = TRUE)
refine_original$company <- gsub("fillips|philips|phillips|phlips|phillps|phllips", "philips", refine_original$company, ignore.case = TRUE)
refine_original$company <- gsub("unilever|unilver", "unilever", refine_original$company, ignore.case = TRUE)
refine_original$company <- gsub("van houten", "van houten", refine_original$company, ignore.case = TRUE)

#making two columns out of "Product code / number"
refine_original <- separate(refine_original, 'Product code / number', c("product_code", "product_number"), sep = "-")

#making a product categories column
refine_original <- mutate(refine_original, product_category = ifelse(refine_original$product_code == "p", "Smartphone", ifelse(refine_original$product_code == "v", "TV", ifelse(refine_original$product_code == "x", "Laptop", "Tablet"))))

#moving the product categories column next to the product code and product number columns
refine_original <- refine_original[c("company", "product_category", "product_code", "product_number", "address", "city", "country", "name")]

#making one address column
refine_original <- unite(refine_original, "full_address", address, city, country, sep = ", ")

#making dummy binary variables for each company
refine_original <- mutate(refine_original, company_akzo = ifelse(company == "akzo", 1, 0))
refine_original <- mutate(refine_original, company_philips = ifelse(company == "philips", 1, 0))
refine_original <- mutate(refine_original, company_unilever = ifelse(company == "unilever", 1, 0))
refine_original <- mutate(refine_original, company_van_houten = ifelse(company == "van houten", 1, 0))

#making dummy binary variables for each product category
refine_original <- mutate(refine_original, product_smartphone = ifelse(product_category == "Smartphone", 1, 0))
refine_original <- mutate(refine_original, product_tv = ifelse(product_category == "TV", 1, 0))
refine_original <- mutate(refine_original, product_laptop = ifelse(product_category == "Laptop", 1, 0))
refine_original <- mutate(refine_original, product_tablet = ifelse(product_category == "Tablet", 1, 0))