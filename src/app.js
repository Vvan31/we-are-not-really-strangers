const prompts = [
  { topic: "everyday", text: "What’s a small thing I do that makes an ordinary day feel a little better?", follow: "When did you first notice that about me?" },
  { topic: "everyday", text: "What’s something you wish we made a little more time for, just because it brings you joy?", follow: "What would making room for it look like this week?" },
  { topic: "everyday", text: "When do you feel most understood by me, even without needing to explain much?", follow: "What helps create that feeling?" },
  { topic: "everyday", text: "What’s one way we could make a regular day feel more like ours?", follow: "What tiny first step could we try?" },
  { topic: "everyday", text: "What have you been carrying lately that you’d like me to know about?", follow: "Would listening, helping, or simply sitting with you feel best?" },
  { topic: "everyday", text: "What’s a recent moment when you felt proud of yourself?", follow: "What do you wish you could tell your past self about it?" },
  { topic: "memories", text: "What’s a memory of us that you return to when you need a little warmth?", follow: "What detail from that day can you still picture?" },
  { topic: "memories", text: "What did you love doing as a kid that you’d enjoy bringing back into your life?", follow: "How could we make a grown-up version of it together?" },
  { topic: "memories", text: "What’s something about the way you grew up that you hope we carry into our life together?", follow: "Is there anything you’d like us to do differently?" },
  { topic: "memories", text: "When did you first feel like we might become important to each other?", follow: "What do you remember noticing about me?" },
  { topic: "memories", text: "What’s a challenge you’ve made it through that taught you something about your own strength?", follow: "What do you wish people understood about that time?" },
  { topic: "memories", text: "Which version of yourself from the past would be happiest to see who you are now?", follow: "What would you want to tell them?" },
  { topic: "dreams", text: "If we could plan a day together with no obligations, what would make it feel perfect to you?", follow: "Which part would you want to remember most?" },
  { topic: "dreams", text: "What’s something you’re curious about trying, even if you’re not sure you’d be good at it?", follow: "Would it be more fun to try it together or cheer each other on?" },
  { topic: "dreams", text: "What do you hope feels different in your life a year from now?", follow: "What kind of support from me would matter along the way?" },
  { topic: "dreams", text: "What does a life that feels spacious and peaceful look like to you?", follow: "What’s one piece of that we can make room for now?" },
  { topic: "dreams", text: "What’s a place you’d love for us to experience together, near or far?", follow: "What do you imagine us doing there?" },
  { topic: "dreams", text: "What’s one hope you have for the way we keep growing together?", follow: "How might we remind each other of that hope?" },
  { topic: "everyday", text: "What kind of affection or care has felt especially good to receive lately?", follow: "Is there a way you’d like a little more of it?" },
  { topic: "memories", text: "What’s something you’ve changed your mind about as you’ve gotten to know yourself better?", follow: "What helped you see it in a new way?" },
  { topic: "dreams", text: "What would you love to learn or make if you gave yourself permission to be a beginner?", follow: "What could make starting feel easy?" },
  { topic: "everyday", text: "What’s one thing you appreciate about the way we handle life as a team?", follow: "When did you notice us doing that especially well?" },
  { topic: "memories", text: "What’s a kind thing someone once said to you that you still remember?", follow: "What made those words stay with you?" },
  { topic: "dreams", text: "What’s a simple tradition you’d love for us to have, now or someday?", follow: "What would our first one look like?" },
  // EVERYDAY (34)
  { topic: "everyday", text: "What’s a sound, smell, or texture around us right now that helps your shoulders drop a little?", follow: "How can we bring a little more of that into our space?" },
  { topic: "everyday", text: "What’s a tiny routine we share that secretly feels like a anchor in your week?", follow: "What makes that specific moment feel steady to you?" },
  { topic: "everyday", text: "When you’re feeling overstimulated or tired, what’s the easiest way for us to just exist side by side?", follow: "Do you prefer quiet company, gentle distraction, or physical closeness?" },
  { topic: "everyday", text: "What’s something you’ve been enjoying lately—a song, a snack, a show, or a small ritual—that feels purely for you?", follow: "What do you love most about how it makes you feel?" },
  { topic: "everyday", text: "What’s a quirk or habit of mine that always makes you smile, even on a heavy day?", follow: "Why does that one get you every time?" },
  { topic: "everyday", text: "When do you feel most like your unfiltered, authentic self when we’re together?", follow: "What makes it feel easy to let your guard down there?" },
  { topic: "everyday", text: "What’s a simple meal or drink that always feels like a warm hug to you?", follow: "When should we make or grab it together next?" },
  { topic: "everyday", text: "What’s something your body has been asking for lately—more rest, movement, fresh air, or stillness?", follow: "How can I help protect a little time for that today?" },
  { topic: "everyday", text: "What’s a small kindness you noticed someone do recently, or something sweet you saw out in the world?", follow: "Why did that moment catch your eye?" },
  { topic: "everyday", text: "What’s your favorite time of day when we’re at home together?", follow: "What’s usually happening during that window?" },
  { topic: "everyday", text: "What’s a topic you could happily talk about for an hour without getting tired?", follow: "What’s one rabbit hole from it you’ve been thinking about lately?" },
  { topic: "everyday", text: "What kind of touch or physical affection feels most grounding to you right now?", follow: "Is there a spot or gesture that instantly calms your nervous system?" },
  { topic: "everyday", text: "What’s something you’ve done recently just for the fun of it, with zero productivity attached?", follow: "How did it feel to give yourself that permission?" },
  { topic: "everyday", text: "When you’re having a quiet day, what’s a small way I can show you I’m thinking of you without needing a big conversation?", follow: "What kind of little check-in lands best for you?" },
  { topic: "everyday", text: "What’s a comfort item, piece of clothing, or corner of our space that feels like a safe haven?", follow: "What makes it feel so comforting?" },
  { topic: "everyday", text: "What’s something that made you genuinely laugh out loud over the last few days?", follow: "What made it hit so right in that moment?" },
  { topic: "everyday", text: "What’s one thing you’re looking forward to in the next 24 hours, no matter how small?", follow: "How can we make that moment even nicer?" },
  { topic: "everyday", text: "What’s a strength you see in yourself right now that you didn’t always give yourself credit for?", follow: "Where do you see that strength showing up lately?" },
  { topic: "everyday", text: "If we turned off all screens for an evening, what’s a cozy way you’d love to spend those hours?", follow: "What snacks or music would set the mood?" },
  { topic: "everyday", text: "What’s a compliment I’ve given you that you actually believe when you hear it?", follow: "What helps you take it in?" },
  { topic: "everyday", text: "What’s something small in nature—like the light at a certain hour, rain, or a plant—that you’ve noticed lately?", follow: "What did you like about looking at it?" },
  { topic: "everyday", text: "When we’re out running errands or doing mundane chores, what makes it feel fun instead of tedious?", follow: "What’s your favorite boring thing to do with me?" },
  { topic: "everyday", text: "What’s a boundary or 'no' you’ve protected recently that gave you some breathing room?", follow: "How did it feel afterward?" },
  { topic: "everyday", text: "What’s a song that feels like a reset button whenever you put it on?", follow: "What mood does it put you in?" },
  { topic: "everyday", text: "What’s something you love watching me get excited about?", follow: "What does my face or energy look like when I’m in that zone?" },
  { topic: "everyday", text: "What’s a low-energy activity we can do together that still makes you feel connected to me?", follow: "Want to keep that in our back pocket for tired evenings?" },
  { topic: "everyday", text: "What’s something about your own personality that you genuinely enjoy living with?", follow: "When do you appreciate that trait most?" },
  { topic: "everyday", text: "If you could bottle the feeling of your favorite kind of weekend morning, what would be inside?", follow: "What’s the first thing you’d want to see or hear?" },
  { topic: "everyday", text: "What’s a small detail about me that you feel like only you really know?", follow: "How did you figure that out?" },
  { topic: "everyday", text: "What helps you come back into your body when your mind has been spinning?", follow: "Is there a way I can join you in that when you want company?" },
  { topic: "everyday", text: "What’s a hobby or interest of yours that makes you lose track of time in a good way?", follow: "What draws you in so completely when you’re doing it?" },
  { topic: "everyday", text: "What’s one thing we did this week that felt effortless between us?", follow: "Why do you think we clicked so easily there?" },
  { topic: "everyday", text: "What’s your favorite way for us to say goodnight or wind down at the end of the day?", follow: "What makes that feel complete?" },
  { topic: "everyday", text: "What’s something gentle you’d say to a close friend who was feeling the exact way you feel today?", follow: "What happens if we let those words apply to you too?" },

  // MEMORIES (33)
  { topic: "memories", text: "What’s an ordinary, unplanned moment between us that ended up becoming one of your favorite memories?", follow: "What made it stick when bigger events might have faded?" },
  { topic: "memories", text: "What’s a place we’ve been together—even a park bench, café, or car ride—that still feels warm when you think of it?", follow: "What were we talking or laughing about there?" },
  { topic: "memories", text: "What’s a favorite childhood game, book, or imaginary world you used to get completely lost in?", follow: "What did you love about being in that world?" },
  { topic: "memories", text: "When in our relationship did you first realize you could fully exhale around me?", follow: "Do you remember where we were when that clicked?" },
  { topic: "memories", text: "What’s a meal we shared that you still think about sometimes?", follow: "Was it the food itself or the mood around the table?" },
  { topic: "memories", text: "What’s something you used to collect, draw, or build when you were younger just because it fascinated you?", follow: "What sparked your curiosity back then?" },
  { topic: "memories", text: "What’s a moment when we couldn’t stop laughing together?", follow: "Can you still remember what set us off?" },
  { topic: "memories", text: "What’s a song or album that immediately transports you back to a specific good season of your life?", follow: "What does that version of you feel like?" },
  { topic: "memories", text: "What’s a time you felt deeply proud of how you showed up for yourself or someone you care about?", follow: "What gave you that clarity in the moment?" },
  { topic: "memories", text: "What’s an early memory of us where you remember feeling a quiet sense of excitement?", follow: "What detail from that day still stands out?" },
  { topic: "memories", text: "What was your favorite outdoor spot or hideaway when you were growing up?", follow: "How did it feel to spend time there?" },
  { topic: "memories", text: "What’s a small gift, note, or gesture you’ve received in your life that meant way more than its size?", follow: "Why did it land so deeply?" },
  { topic: "memories", text: "What’s a moment when we navigated a small hiccup or miscommunication and came out feeling closer?", follow: "What did that teach you about us?" },
  { topic: "memories", text: "What’s a movie, show, or story from your younger years that shaped what you find comforting or magical?", follow: "Would you ever want to revisit it together?" },
  { topic: "memories", text: "When do you remember feeling completely in your element doing something you love?", follow: "What were you doing, and how did your body feel?" },
  { topic: "memories", text: "What’s a late-night or slow-morning conversation we had that you’re really glad we shared?", follow: "What stayed with you after it?" },
  { topic: "memories", text: "What’s a weather memory you love—like a summer storm, first snow, or warm evening breeze?", follow: "Where were you, and what made it memorable?" },
  { topic: "memories", text: "What’s something you taught yourself how to do purely out of passion or stubborn curiosity?", follow: "How did it feel the first time you got the hang of it?" },
  { topic: "memories", text: "What’s a photo of us (or of you) that captures a feeling you really love?", follow: "What was happening right before the picture was taken?" },
  { topic: "memories", text: "What’s a time a friend, teacher, or stranger noticed something wonderful about you that you hadn’t seen yet?", follow: "How did it feel to be seen like that?" },
  { topic: "memories", text: "What’s a spontaneous detour or last-minute plan we made that turned out way better than expected?", follow: "What made it so fun?" },
  { topic: "memories", text: "What’s a favorite treat or comfort food from when you were a kid that still hits the spot?", follow: "What memory comes along with the taste?" },
  { topic: "memories", text: "What’s a moment when you felt quietly brave, even if nobody else around you knew it?", follow: "What helped you take that step?" },
  { topic: "memories", text: "What’s something I did early on in our relationship that made you feel genuinely cared for?", follow: "Did you realize how much it meant at the time?" },
  { topic: "memories", text: "What’s an animal, pet, or creature encounter from your past that always brings a smile to your face?", follow: "What made them so special?" },
  { topic: "memories", text: "What’s a creative project, outfit, or personal style phase you had that felt wonderfully expressive?", follow: "What did you enjoy about experimenting with it?" },
  { topic: "memories", text: "What’s a moment when we communicated something important without saying a single word?", follow: "How did you know we were on the same page?" },
  { topic: "memories", text: "What’s a vacation, day trip, or afternoon walk from your past where time seemed to slow down?", follow: "What was the pace of that day like?" },
  { topic: "memories", text: "What’s a piece of advice or a quote you stumbled across years ago that actually turned out to be true?", follow: "How has it shown up in your life?" },
  { topic: "memories", text: "What’s a time you felt completely surrounded by warmth, music, or good energy?", follow: "What made the atmosphere feel so good?" },
  { topic: "memories", text: "What’s a small milestone in our relationship that feels sweetest to look back on?", follow: "How would you describe how we’ve grown since then?" },
  { topic: "memories", text: "What’s something you used to worry about a lot in the past that eventually worked itself out?", follow: "What helped you get through that stretch?" },
  { topic: "memories", text: "If you could step back into one calm, happy afternoon from your life just to soak it in for ten minutes, which one would you pick?", follow: "What’s the first sensory detail you’d notice?" },

  // DREAMS (33)
  { topic: "dreams", text: "If we had a magic teleportation door for just one afternoon, what kind of landscape would you step into?", follow: "What would we do first once we got there?" },
  { topic: "dreams", text: "Imagine our dream cozy reading or lounging nook—what kind of light, blankets, and textures are in it?", follow: "What’s the first thing you’d curl up with there?" },
  { topic: "dreams", text: "If you could take a playful, zero-pressure workshop together—like pottery, glassblowing, baking, or botanical painting—what sounds most fun?", follow: "What would you want to make first?" },
  { topic: "dreams", text: "If we rented a tiny cabin or cottage for a quiet weekend with nowhere to be, what’s on the grocery list?", follow: "How would we spend the evening?" },
  { topic: "dreams", text: "What’s a small, playful bucket-list experience—like stargazing, riding a scenic train, or visiting an aquarium—that sounds delightful to you?", follow: "What makes that experience sound so appealing?" },
  { topic: "dreams", text: "If you could wake up tomorrow knowing how to play any musical instrument effortlessly just for your own enjoyment, which would you choose?", follow: "What kind of music would you play first?" },
  { topic: "dreams", text: "Imagine designing a secret garden or balcony sanctuary just for the two of us—what plants, scents, or sounds are in it?", follow: "What time of day would you hang out there most?" },
  { topic: "dreams", text: "If we had a whole rainy Sunday with a stack of movies, games, or books, what’s your ideal lineup?", follow: "What kind of blanket fort or couch setup are we building?" },
  { topic: "dreams", text: "What’s a cuisine or dish you’d love for us to learn how to cook from scratch together on a slow evening?", follow: "What’s your favorite part of cooking together?" },
  { topic: "dreams", text: "If you could spend a day shadowing an artist, craftsperson, or conservationist just out of pure curiosity, who would you pick?", follow: "What part of their world fascinates you?" },
  { topic: "dreams", text: "What’s a small creative project you’ve daydreamed about tinkering with just because it looks satisfying?", follow: "What supplies or space would make it fun to start?" },
  { topic: "dreams", text: "If we adopted a fictional creature or whimsical pet to live with us, what would it be like?", follow: "What would we name it?" },
  { topic: "dreams", text: "Imagine a slow morning in a coastal town, mountain village, or sleepy city neighborhood—which setting feels most soothing right now?", follow: "Where would we walk to get coffee or pastries?" },
  { topic: "dreams", text: "What’s a skill you’d love to pick up purely because it feels tactile and calming, like knitting, woodworking, or gardening?", follow: "What draws you to working with your hands like that?" },
  { topic: "dreams", text: "If we created a personal 'comfort menu' for hard days, what three things would definitely be on yours?", follow: "Which one sounds nicest right now?" },
  { topic: "dreams", text: "What’s an animal you’d love to see in the wild in its natural, peaceful habitat?", follow: "Where in the world would we go to spot it?" },
  { topic: "dreams", text: "If you could curate a tiny museum or exhibition of your favorite things in the world, what’s in the main room?", follow: "What’s the centerpiece item?" },
  { topic: "dreams", text: "What’s a simple seasonal ritual—like autumn picnics, summer night walks, or winter hot-chocolate nights—you’d love us to lean into?", follow: "What makes that season feel special to you?" },
  { topic: "dreams", text: "If we had a blank-canvas treehouse or studio space with zero rules, what would we put inside?", follow: "What would we use it for most?" },
  { topic: "dreams", text: "What’s a book genre, fictional universe, or kind of story you wish there were way more of?", follow: "What makes those stories feel like home to you?" },
  { topic: "dreams", text: "If you could bottle a signature scent that captures 'peace and safety' for you, what notes would be in it?", follow: "Where would you want to smell it?" },
  { topic: "dreams", text: "What’s a scenic drive or walking trail you’d love for us to explore with a great playlist and zero rush?", follow: "What kind of music fits that trip?" },
  { topic: "dreams", text: "If we started a tiny, just-for-us collection—like postcards, smooth stones, pressed flowers, or quirky mugs—what sounds cutest?", follow: "Where would we keep it?" },
  { topic: "dreams", text: "Imagine an evening picnic at golden hour—what’s in the basket and where did we spread the blanket?", follow: "What are we talking about as the sun goes down?" },
  { topic: "dreams", text: "What’s a form of movement or play—like swimming, roller skating, dancing in the kitchen, or gentle yoga—that you’d love to do more just for joy?", follow: "How does your body feel when you’re doing it?" },
  { topic: "dreams", text: "If you could spend a night sleeping somewhere unusual—like a glass-roof igloo, a houseboat, or a cozy camper—which sounds best?", follow: "What would falling asleep there feel like?" },
  { topic: "dreams", text: "What’s a little habit of gentleness you’d love to practice toward yourself over the next few weeks?", follow: "How can I cheer you on without adding any pressure?" },
  { topic: "dreams", text: "If we hosted a tiny, low-key game night or movie marathon with only your absolute favorite things, what’s on the schedule?", follow: "What makes a hangout feel effortless to you?" },
  { topic: "dreams", text: "What’s a language, accent, or form of expression you find beautiful to listen to?", follow: "Have you ever thought about dabbling in it just for fun?" },
  { topic: "dreams", text: "Imagine a day where every single errand and chore is magically already done—how do you spend your bonus free hours?", follow: "Would you want solo recharge time, us time, or a mix?" },
  { topic: "dreams", text: "What’s a botanical conservatory, bookstore, museum, or local spot you’d love to wander through slowly with me?", follow: "Which section would you head to first?" },
  { topic: "dreams", text: "If you could design a custom board game, playlist, or zine about our inside jokes and favorite things, what would the title be?", follow: "What’s one detail that would definitely make the cut?" },
  { topic: "dreams", text: "What does feeling completely safe, cherished, and unhurried look like for you on an ideal day together?", follow: "Which part of that feeling can we create a small taste of tonight?" }
];

const topicNames = { everyday: "THE EVERYDAY", memories: "OUR STORIES", dreams: "WHAT’S AHEAD" };
const topicButtons = [...document.querySelectorAll(".topic-option")];
const welcomeScreen = document.querySelector("#welcome-screen");
const gameScreen = document.querySelector("#game-screen");
const promptText = document.querySelector("#prompt-text");
const promptTopic = document.querySelector("#prompt-topic");
const followUp = document.querySelector("#follow-up");
const followUpText = document.querySelector("#follow-up-text");
const followButton = document.querySelector("#follow-button");
const saveButton = document.querySelector("#save-prompt-button");
const toast = document.querySelector("#toast");

let selectedTopic = "all";
let sessionPrompts = [];
let currentPrompt = null;
let currentIndex = 0;
let toastTimer;
let savedPrompts = loadSaved();

function loadSaved() {
  try {
    const stored = JSON.parse(localStorage.getItem("closer-together-saved") || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function updateSavedCount() {
  document.querySelector("#saved-count").textContent = savedPrompts.length;
}

function shuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function startGame() {
  const available = selectedTopic === "all" ? prompts : prompts.filter((prompt) => prompt.topic === selectedTopic);
  sessionPrompts = shuffle(available);
  currentIndex = 0;
  welcomeScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  showPrompt();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showPrompt() {
  if (currentIndex >= sessionPrompts.length) {
    sessionPrompts = shuffle(sessionPrompts);
    currentIndex = 0;
    showToast("That was the whole stack — here’s a fresh mix.");
  }
  currentPrompt = sessionPrompts[currentIndex];
  promptText.textContent = currentPrompt.text;
  promptTopic.textContent = topicNames[currentPrompt.topic];
  followUpText.textContent = currentPrompt.follow;
  followUp.classList.add("hidden");
  followButton.classList.remove("active");
  followButton.querySelector("span:first-child").textContent = "Go a little deeper";
  const count = String(currentIndex + 1).padStart(2, "0");
  document.querySelector("#round-count").innerHTML = `${count} <span>/ ${String(sessionPrompts.length).padStart(2, "0")}</span>`;
  updateSaveButton();
}

function isSaved(prompt) {
  return savedPrompts.some((saved) => saved.text === prompt.text);
}

function updateSaveButton() {
  const saved = isSaved(currentPrompt);
  saveButton.classList.toggle("is-saved", saved);
  saveButton.querySelector("span").textContent = saved ? "Saved for later" : "Save this one";
}

function toggleSave() {
  if (!currentPrompt) return;
  if (isSaved(currentPrompt)) {
    savedPrompts = savedPrompts.filter((prompt) => prompt.text !== currentPrompt.text);
    showToast("Removed from your saved prompts.");
  } else {
    savedPrompts.push(currentPrompt);
    showToast("Kept close for another time.");
  }
  localStorage.setItem("closer-together-saved", JSON.stringify(savedPrompts));
  updateSavedCount();
  updateSaveButton();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

function renderSavedPrompts() {
  const list = document.querySelector("#saved-list");
  const empty = document.querySelector("#empty-saved");
  list.replaceChildren();
  empty.classList.toggle("hidden", savedPrompts.length > 0);
  savedPrompts.forEach((prompt) => {
    const item = document.createElement("article");
    item.className = "saved-item";
    const topic = document.createElement("span");
    topic.className = "prompt-label";
    topic.textContent = topicNames[prompt.topic];
    const text = document.createElement("p");
    text.textContent = prompt.text;
    const remove = document.createElement("button");
    remove.className = "remove-saved";
    remove.type = "button";
    remove.textContent = "Remove";
    remove.setAttribute("aria-label", `Remove saved prompt: ${prompt.text}`);
    remove.addEventListener("click", () => {
      savedPrompts = savedPrompts.filter((saved) => saved.text !== prompt.text);
      localStorage.setItem("closer-together-saved", JSON.stringify(savedPrompts));
      updateSavedCount();
      renderSavedPrompts();
      updateSaveButton();
    });
    item.append(topic, text, remove);
    list.append(item);
  });
}

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedTopic = button.dataset.topic;
    topicButtons.forEach((option) => {
      const selected = option === button;
      option.classList.toggle("selected", selected);
      option.setAttribute("aria-pressed", String(selected));
    });
  });
});

document.querySelector("#start-button").addEventListener("click", startGame);
document.querySelector("#next-button").addEventListener("click", () => {
  currentIndex += 1;
  showPrompt();
});
document.querySelector("#back-button").addEventListener("click", () => {
  gameScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
saveButton.addEventListener("click", toggleSave);
followButton.addEventListener("click", () => {
  const opening = followUp.classList.contains("hidden");
  followUp.classList.toggle("hidden", !opening);
  followButton.classList.toggle("active", opening);
  followButton.querySelector("span:first-child").textContent = opening ? "A little less deep" : "Go a little deeper";
});

document.querySelector("#saved-button").addEventListener("click", () => {
  renderSavedPrompts();
  document.querySelector("#saved-dialog").showModal();
});
document.querySelector("#close-dialog").addEventListener("click", () => document.querySelector("#saved-dialog").close());
document.querySelector("#saved-dialog").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

updateSavedCount();
