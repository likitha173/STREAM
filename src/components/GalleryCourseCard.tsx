import { Chapter, Course, Unit } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  course: Course & {
    units: Unit[]; // Removed chapters from the type
  };
};

const GalleryCourseCard = ({ course }: Props) => {
  return (
    <div className="border rounded-lg border-secondary w-[300px] max-w-[300px]">
      <div className="relative">
        <Link
          href={`/course/${course.id}/0/0`}
          className="relative block w-[300px] h-[200px]"
        >
          <Image
            src={course.image || ""}
            className="object-cover w-full h-full rounded-t-lg"
            width={300}
            height={200}
            alt="picture of the course"
          />
        </Link>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{course.name}</h2>
        {/* <div className="space-y-1">
          {course.units.map((unit, unitIndex) => {
            return (
              <Link
                href={`/course/${course.id}/${unitIndex}/0`}
                key={unit.id}
                className="block underline w-fit"
              >
                {unit.name}
              </Link>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default GalleryCourseCard;
