import classes from "./Projects.module.css";
import order from "../../assets/order.jpg";
import nextJsBlog from "../../assets/nextJsBlog.jpg";
import productLisings from "../../assets/product-listings-img.jpg";
import expense from "../../assets/expense.jpg";
import recipe from "../../assets/recipe.jpg";
import stock from "../../assets/stock.jpg";
import team from "../../assets/team.jpg";

const Projects = () => {
  const productListings = (
    <div>
      <a
        href="https://product-listing-ten.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={productLisings} alt="Product listings application" />
      </a>
      <h3>Product Listings App</h3>
      <div className={classes.gitHub}>
        <a href="https://github.com/dkey01/product-listing">View GitHub code</a>
      </div>
    </div>
  );
  const blog = (
    <div>
      <a
        href="https://next-js-blog-3v3a.vercel.app"
        target="_blank"
        rel="noreferrer"
      >
        <img src={nextJsBlog} alt="NextJS blog application" />
      </a>
      <h3>NextJS Blog App</h3>
      <div className={classes.gitHub}>
        <a href="https://github.com/dkey01/NextJS-Blog">View GitHub code</a>
      </div>
    </div>
  );

  const foodOrderApp = (
    <div>
      <a
        href="https://food-order-app-dkey01.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={order} alt="Food order application" />
      </a>
      <h3>Food-order App</h3>
      <div className={classes.gitHub}>
        <a href="https://github.com/dkey01/FoodOrder-App.git">
          View GitHub code
        </a>
      </div>
    </div>
  );

  const expenseApp = (
    <div>
      <a
        href="https://expense-app-kappa.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={expense} alt="Expense application" />
      </a>
      <h3>Expense App</h3>
      <div className={classes.gitHub}>
        <a href="https://github.com/dkey01/Expense-App.git">View GitHub code</a>
      </div>
    </div>
  );

  const recipeApp = (
    <div>
      <a
        href="https://my-meal-app.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={recipe} alt="Meal-recipe application" />
      </a>
      <h3>Meal-recipe App</h3>
      <div className={classes.gitHub}>
        <a href="https://github.com/dkey01/My-Meal-App.git">View GitHub code</a>
      </div>
    </div>
  );

  const stockApp = (
    <div>
      <a
        href="https://stock-app-dkey01.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={stock} alt="Stock-Market application" />
      </a>
      <h3>Stock-market App</h3>
      <div className={classes.gitHub}>
        <a href="https://github.com/dkey01/Stock-App.git">View GitHub code</a>
      </div>
    </div>
  );

  const teamApp = (
    <div>
      <a href="https://spy-app.vercel.app/" target="_blank" rel="noreferrer">
        <img src={team} alt="Team members application" />
      </a>
      <h3>Team-members App</h3>
      <div className={classes.gitHub}>
        <a href="https://github.com/dkey01/TeamSelectionApp.git">
          View GitHub code
        </a>
      </div>
    </div>
  );
  return (
    <div id="projects" className={classes.projects}>
      <h2>PERSONAL PROJECTS</h2>
      <p>Below you can see links to my projects. Click on an image to view</p>
      {productListings}
      {blog}
      {foodOrderApp}
      {expenseApp}
      {recipeApp}
      {stockApp}
      {teamApp}
    </div>
  );
};

export default Projects;
