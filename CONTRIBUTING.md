# **Contributing to NFVNetwork Bolt Prompt Site**  

Thank you for considering contributing to the NFVNetwork Bolt Prompt Site! We welcome contributions from the community to help enhance and grow the platform.  

Whether you're fixing a bug, adding new features, or improving documentation, this guide will help you get started.

---

## **How to Contribute**  

### 1. **Fork the Repository**  
Start by forking the repository to your GitHub account:  
1. Navigate to the repository:  
   ```  
   https://github.com/nfvnetwork/nfv-net 
   ```  
2. Click the "Fork" button in the top right corner.  
3. Clone your forked repository:  
   ```bash  
   git clone https://github.com/<your-username>/nfv-net.git  
   cd nfv-net  
   ```  

---

### 2. **Create a Branch**  
Create a new branch for your feature or bug fix:  
```bash  
git checkout -b feature/my-awesome-feature  
```  

---

### 3. **Install Dependencies**  
Install all necessary dependencies to run the project:  
```bash  
npm install  
```  

---

### 4. **Start the Development Server**  
Run the project locally to test your changes:  
```bash  
npm start  
```  
The development server will start at `http://localhost:3000`.

---

### 5. **Make Your Changes**  
- Follow the **code style and guidelines** outlined below.  
- Ensure your code is well-documented and organized.  
- Test your changes thoroughly before committing.  

---

### 6. **Run Tests**  
Before submitting your changes, run all tests to ensure you didn't introduce any bugs:  
```bash  
npm test  
```  

---

### 7. **Commit Your Changes**  
Use clear and descriptive commit messages:  
```bash  
git add .  
git commit -m "Add feature: <brief description>"  
```  

---

### 8. **Push Your Branch**  
Push your changes to your forked repository:  
```bash  
git push origin feature/my-awesome-feature  
```  

---

### 9. **Submit a Pull Request**  
1. Go to the original repository:  
   ```  
   https://github.com/nfvnetwork/nfv-net  
   ```  
2. Click on "Pull Requests" and then "New Pull Request".  
3. Select your fork and branch, then submit your pull request.  
4. Provide a clear description of your changes in the pull request template.

---

## **Code Guidelines**  

### **General**  
- Write clean, modular, and reusable code.  
- Use descriptive variable and function names.  
- Follow the **React best practices** (functional components, hooks, etc.).  

### **Style**  
- Use the existing **CSS/SCSS structure** for styling.  
- Follow the rules defined in `eslint` and `prettier`.  
- Run the formatter:  
  ```bash  
  npm run format  
  ```  

### **Testing**  
- Write unit tests for all new functionality using **Jest**.  
- Ensure all tests pass before submitting a pull request.  

---

## **Issues and Bugs**  

If you find a bug or want to request a feature:  
1. Check the [issue tracker](https://github.com/nfvnetwork/nfv-net/issues) to see if it’s already reported.  
2. If not, open a new issue. Be sure to include:  
   - A descriptive title.  
   - Steps to reproduce the issue (if applicable).  
   - Screenshots or logs for context.  

---

## **Feature Requests**  

We’re always open to new ideas! Submit your feature requests by creating a new issue and labeling it as `enhancement`. Please describe:  
- The problem your feature solves.  
- Why it’s important.  
- Any potential implementation details.  

---

## **Code of Conduct**  

By contributing, you agree to abide by our [Code of Conduct](https://github.com/nfvnetwork/nfv-net/blob/main/CODE_OF_CONDUCT.md).  

---

## **Need Help?**  

If you have any questions, feel free to:  
- Open an issue in the repository.  
- Reach out to the community on our [Discord](https://discord.gg/rYJQneA3).  

---

Thank you for helping us make the NFVNetwork even better! 🚀
