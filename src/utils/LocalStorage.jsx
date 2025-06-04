

const employees = [
  {
    "id": 1,
    "first_name":'arjun',
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "task_title": "Task 1 Title",
        "task_description": "Complete the module setup",
        "task_date": "2025-06-01",
        "category": "Development"
      },
      {
        "active": true,
        "new_task": true,
        "completed": true,
        "failed": false,
        "task_title": "Task 2 Title",
        "task_description": "Fix the bugs in the code",
        "task_date": "2025-06-02",
        "category": "Bug Fixing"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "task_title": "Task 3 Title",
        "task_description": "Update project documentation",
        "task_date": "2025-06-03",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 2,
    "first_name":'pavan',
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "task_title": "Task 1 Title",
        "task_description": "Design new UI for the app",
        "task_date": "2025-06-01",
        "category": "Design"
      },
      {
        "active": true,
        "new_task": false,
        "completed": true,
        "failed": false,
        "task_title": "Task 2 Title",
        "task_description": "Deploy the app to production",
        "task_date": "2025-06-02",
        "category": "Deployment"
      }
    ]
  },
  {
    "id": 3,
    "first_name":'sai',
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": true,
        "failed": false,
        "task_title": "Task 1 Title",
        "task_description": "Write unit tests",
        "task_date": "2025-06-01",
        "category": "Testing"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "task_title": "Task 2 Title",
        "task_description": "Research new tech stack",
        "task_date": "2025-06-02",
        "category": "Research"
      }
    ]
  },
  {
    "id": 4,
    "first_name":'karthik',
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "task_title": "Task 1 Title",
        "task_description": "Set up database schema",
        "task_date": "2025-06-01",
        "category": "Database"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": true,
        "task_title": "Task 2 Title",
        "task_description": "Optimize queries",
        "task_date": "2025-06-02",
        "category": "Optimization"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "task_title": "Task 3 Title",
        "task_description": "Prepare release notes",
        "task_date": "2025-06-03",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 5,
    "first_name":'jay',
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "task_title": "Task 1 Title",
        "task_description": "Add new feature to the app",
        "task_date": "2025-06-01",
        "category": "Feature Development"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "task_title": "Task 2 Title",
        "task_description": "Fix issues in the old feature",
        "task_date": "2025-06-02",
        "category": "Bug Fixing"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "task_title": "Task 3 Title",
        "task_description": "Code refactoring",
        "task_date": "2025-06-03",
        "category": "Refactoring"
      }
    ]
  }
]

const admin = [
  {
    "id": 101,
    "first_name":'Amarjot',
    "email": "admin@me.com",
    "password": "123"
  }
]

export const setlocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}
export const getlocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  
  return { employees, admin };
 
}