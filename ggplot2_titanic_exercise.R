#Hunter Campbell
#titanic exercise ggplot2 assignment
#5/26/2017

# titanic is avaliable in your workspace

# Check out the structure of titanic
str(titanic)

# Use ggplot() for the first instruction
#making a bar plot with titanic, having the bars side by side to show survival rates of each gender and class
ggplot(titanic, aes(x = factor(Pclass), fill = factor(Sex))) +
  geom_bar(position = "dodge")


# Use ggplot() for the second instruction
#Make a facet grid from the previous bar plot
ggplot(titanic, aes(x = factor(Pclass), fill = factor(Sex))) +
  geom_bar(position = "dodge") +
  facet_grid(". ~ Survived")

# Position jitter (use below)
posn.j <- position_jitter(0.5, 0)

# Use ggplot() for the last instruction
#Show a scatter plot with the previous bar plot/facet grid
ggplot(titanic, aes(x = factor(Pclass), y = Age, col = factor(Sex))) +
  geom_jitter(size = 3, alpha = 0.5, position = posn.j) +
  facet_grid(". ~ Survived")
