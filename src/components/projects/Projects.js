import classes from './Projects.module.css';
import order from '../../assets/order.jpg';
import expense from '../../assets/expense.jpg';
import recipe from '../../assets/recipe.jpg';
import stock from '../../assets/stock.jpg';
import team from '../../assets/team.jpg';

const Projects = () => {
    const foodOrderApp = <div>
                        <a href='https://food-order-app-dkey01.vercel.app/'>
                            <img src={order} alt='Food order application'/>
                        </a>
                        <h3>Food-order App</h3>
                        <div className={classes.gitHub}>
                            <a href='https://github.com/dkey01/FoodOrder-App.git'>View GitHub code</a>
                        </div>
                    </div>
    
    const expenseApp = <div>
                        <a href='https://expense-app-kappa.vercel.app/'>
                            <img src={expense} alt='Expense application'/>
                        </a>
                        <h3>Expense App</h3>
                        <div className={classes.gitHub}>
                            <a href='https://github.com/dkey01/Expense-App.git'>View GitHub code</a>
                        </div>
                    </div>

    const recipeApp = <div>
                    <a href='https://my-meal-app.vercel.app/'>
                        <img src={recipe} alt='Meal-recipe application'/>
                    </a>
                    <h3>Meal-recipe App</h3>
                    <div className={classes.gitHub}>
                        <a href='https://github.com/dkey01/My-Meal-App.git'>View GitHub code</a>
                    </div>
                </div>

    const stockApp = <div>
                    <a href='https://stock-app-dkey01.vercel.app/'>
                        <img src={stock} alt='Stock-Market application'/>
                    </a>
                    <h3>Stock-market App</h3>
                    <div className={classes.gitHub}>
                        <a href='https://github.com/dkey01/Stock-App.git'>View GitHub code</a>
                    </div>
                </div>

    const teamApp = <div>
                    <a href='https://spy-app.vercel.app/'>
                        <img src={team} alt='Team members application'/>
                    </a>
                    <h3>Team-members App</h3>
                    <div className={classes.gitHub}>
                        <a href='https://github.com/dkey01/TeamSelectionApp.git'>View GitHub code</a>
                    </div>
                </div>
    return <div id='projects' className={classes.projects}>
        <h2>PERSONAL PROJECTS</h2>
        <p>Below you can see links to my projects. Click on an image to view</p>
        {foodOrderApp}
        {expenseApp}
        {recipeApp}
        {stockApp}
        {teamApp}
    </div>
}

export default Projects;