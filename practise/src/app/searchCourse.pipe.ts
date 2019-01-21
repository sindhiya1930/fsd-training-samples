import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './Course';

@Pipe({
    name: 'searchCourse'
})
export class SearchCoursePipe implements PipeTransform {

    transform(courses: Array<Course>, courseName?: string) {
        console.log(courses);
        console.log(courseName);
        if(courseName)
        {
            let filteredCourse: Array<Course> = null;
            filteredCourse= courses.filter(course => course.title.startsWith(courseName) )
            return filteredCourse;
        }
        return courses;
    }

}
