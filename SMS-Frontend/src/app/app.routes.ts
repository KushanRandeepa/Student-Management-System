import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DeactivateGuardGuard } from './services/guards/DeactivateGuard-service';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './pages/student/student-dashboard/student-dashboard.component';
import { StudentMyclassPageComponent } from './pages/student/student-myclass-page/student-myclass-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { StudentRootComponent } from './pages/student/student-root/student-root.component';
import { AdminRootComponent } from './pages/admin/admin-root/admin-root.component';
import { TeacherRootComponent } from './pages/teacher/teacher-root/teacher-root.component';
import { TeacherDashboardComponent } from './pages/teacher/teacher-dashboard/teacher-dashboard.component';
import { MyNotesPageComponent } from './pages/student/my-notes-page/my-notes-page.component';
import { StorePageComponent } from './pages/student/store-page/store-page.component';
import { ExamsPageComponent } from './pages/student/exams-page/exams-page.component';
import { MyLecturesPageComponent } from './pages/teacher/my-lectures-page/my-lectures-page.component';
import { ViewStudentsPageComponent } from './pages/teacher/view-students-page/view-students-page.component';
import { ExamTasksPageComponent } from './pages/teacher/exam-tasks-page/exam-tasks-page.component';
import { StudentManagerPageComponent } from './pages/admin/student-manager-page/student-manager-page.component';
import { TeacherManagerPageComponent } from './pages/admin/teacher-manager-page/teacher-manager-page.component';
import { PaymentsManagerPageComponent } from './pages/admin/payments-manager-page/payments-manager-page.component';
export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'signup',
        component: SignupPageComponent,
        canDeactivate: [DeactivateGuardGuard]
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'student',
        component: StudentRootComponent,
        children: [
            {
                path: 'dashboard',
                component: StudentDashboardComponent
            },
            {
                path: 'my-class',
                component: StudentMyclassPageComponent
            },
            {
                path:'my-notes',
                component:MyNotesPageComponent
            },
            {
                path:'store',
                component:StorePageComponent
            },
            {
                path:'exams',
                component:ExamsPageComponent
            }
        ]

    },
    {
        path: 'admin',
        component: AdminRootComponent,
        children: [
            {
                path: 'dashboard',
                component: AdminDashboardComponent
            },
            {
                path: 'store-manager-page',
                component: StorePageComponent
            },
            {
                path:'student-manager-page',
                component:StudentManagerPageComponent
            },
            {
                path:'teacher-manager-page',
                component:TeacherManagerPageComponent
            },
            {
                path:'payments-manager-page',
                component:PaymentsManagerPageComponent
            }
        ]
    },
    {
        path: 'teacher',
        component: TeacherRootComponent,
        children: [
            {
                path: 'dashboard',
                component: TeacherDashboardComponent
            },
            {
                path: 'my-lectures',
                component:MyLecturesPageComponent
            },
            {
                path:'view-students',
                component:ViewStudentsPageComponent
            },
            {
                path:'exam-task',
                component:ExamTasksPageComponent
            }
        ]
    },
    {
        path: 'not-found',
        component: NotfoundPageComponent
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
