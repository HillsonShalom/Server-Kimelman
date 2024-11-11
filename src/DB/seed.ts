import { Candidate } from "../types/schemas/candSchema";

export const seedCandidates = async () => {
  const td = new Candidate({
    name: "Donald J. Trump",
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLL0VKBxr9IkeP6S-B3zv07-_7-5haUPAUUkc4LB7B2jKO2Phuca09TPJhaJN5iZy8PGoGcXRQPaUPvAg",
    votes: 0,
    color: "red",
  });
  await td.save();

  const kh = new Candidate({
    name: "Kamala D. Harris",
    image:
      "https://www.whitehouse.gov/wp-content/uploads/2021/04/V20210305LJ-0043.jpg",
    votes: 0,
    color: "blue",
  });
  await kh.save();

  const js = new Candidate({
    name: "Jill Stein",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2016_11/1463891/160318-jill-stein-green-party-yh-1145a.jpg",
    votes: 0,
    color: "yellow",
  });
  await js.save();
};
