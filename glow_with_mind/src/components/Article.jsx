import React, { useState } from "react";

const articleData = [
  {
    title: "What is anxiety?",
    content: `Anxiety is a normal reaction to danger, the body’s automatic fight-or-flight response that is triggered when you feel threatened, under pressure, or are facing a challenging situation, such as a job interview, exam, or first date. In moderation, anxiety isn’t necessarily a bad thing. It can help you to stay alert and focused, spur you to action, and motivate you to solve problems. But when anxiety is constant or overwhelming—when worries and fears interfere with your relationships and daily life—you’ve likely crossed the line from normal anxiety into the territory of an anxiety disorder.Since anxiety disorders are a group of related conditions rather than a single disorder, symptoms may vary from person to person. One individual may suffer from intense anxiety attacks that strike without warning, 
    while another gets panicky at the thought of mingling at a party. Someone else may struggle with a 
    disabling fear of driving, or uncontrollable, intrusive thoughts. Yet another may live in a constant state of tension,
     worrying about anything and everything. But despite their different forms, all anxiety disorders illicit an intense fear or worry out of 
     proportion to the situation at hand.While having an anxiety disorder can be disabling, preventing you from living the life you want, it’s important to know that you’re not alone. Anxiety disorders are among the most common mental health issues—and are highly treatable. Once you understand your anxiety disorder, there are steps you can take to reduce the symptoms and regain control of your life.`
  },
  {
    title: "What is an anxiety attack?",
    content: `An anxiety attack occurs when stressors or fears build up over time. A relationship conflict or an overloaded work schedule, for example, could gradually increase your anxiousness until you feel completely overwhelmed for a period. For the duration of an anxiety attack, you might experience symptoms such as a lack of focus, tension, or irritability. You could also feel both restless and quickly fatigued.
However, often when people talk about anxiety attacks, they’re really referring to panic attacks. These are episodes of intense panic or fear. They usually occur suddenly and without warning. Sometimes there’s an obvious trigger—getting stuck in an elevator, for example, or thinking about the big speech you have to give—but in other cases, the attacks come out of the blue.
Panic attacks usually peak within ten minutes, and they rarely last more than 30 minutes. But during that short time, you may experience terror so severe that you feel as if you’re about to die or totally lose control. The physical symptoms are themselves so frightening that many people think they’re having a heart attack. After a panic attack is over, you may worry about having another one, particularly in a public place where help isn’t available or you can’t easily escape.
Attack symptoms include:-
1.Surge of overwhelming panic.
2.Feeling of losing control or going crazy.
3.Heart palpitations or chest pain.
4.Feeling like you’re going to pass out.
5.Trouble breathing or choking sensation.
6.Hyperventilation.  
7.Hot flashes or chills.
8.Trembling or shaking.
9.Nausea or stomach cramps.
10.Feeling detached or unreal.
It’s important to seek help if you’re starting to avoid certain situations because you’re afraid of having a panic attack. The truth is that panic attacks are highly treatable. In fact, many people are panic free within just five to eight treatment sessions.`
  },
  {
    title: "High-functioning anxiety",
    content: `“High-functioning anxiety” is a term you may have come across online. It’s not a clinical diagnosis but is sometimes used to describe a person who manages to cope with the demands of daily life despite having anxiety. Outwardly, they may seem unflappable. But beneath their calm demeanor, they’re plagued by anxious and negative thoughts.
If you have high-functioning anxiety, you might seem proactive, outgoing, organized, and achievement-oriented. You may even come off as a perfectionist or model student or employee. However, your underlying anxiety can still have health consequences, including irritability, insomnia, and muscle tension.
Different people experience anxiety symptoms in different ways. It’s important to remember that some people are dealing with struggles that aren’t always apparent..`
  },
  {
    title: "Anxiety and anxiety attack symptoms",
    content: `In addition to the primary symptom of excessive and irrational fear and worry, other common emotional symptoms include:-
1.Feelings of apprehension or dread.
2.Watching for signs of danger.
3.Anticipating the worst.
4.Trouble concentrating.
5.Feeling tense and jumpy.
6.Irritability.
7.Feeling like your mind’s gone blank.
8.But anxiety is more than just a feeling. 

As a product of the body’s fight-or-flight response, it also involves a wide range of physical symptoms, including:-
1.Pounding heart.
2.Sweating.
3.Headaches.
4.Stomach upset.
5.Dizziness.
6.Frequent urination or diarrhea.
7.Shortness of breath.
8.Muscle tension or twitches.
9.Shaking or trembling.
10.Insomnia.
Because of these physical symptoms, anxiety sufferers often mistake their disorder for a medical illness. They may visit many doctors and make numerous trips to the hospital before their anxiety disorder is finally recognized..`
  },
  {
    title: "Types of anxiety disorders",
    content: `Anxiety disorders and closely related conditions include:-

*Generalized anxiety disorder (GAD)
If constant worries and fears distract you from your day-to-day activities, or you’re troubled by a persistent feeling that something bad is going to happen, you may be suffering from generalized anxiety disorder (GAD). People with GAD are chronic worrywarts who feel anxious nearly all of the time, though they may not even know why. GAD often manifests in physical symptoms like insomnia, stomach upset, restlessness, and fatigue.

*Panic attacks and panic disorder
Panic disorder is characterized by repeated, unexpected panic attacks, as well as fear of experiencing another episode. Agoraphobia, the fear of being somewhere where escape or help would be difficult in the event of a panic attack, may also accompany a panic disorder. If you have agoraphobia, you are likely to avoid public places such as shopping malls, or confined spaces such as an airplane.

*Obsessive-compulsive disorder (OCD)
Obsessive-compulsive disorder (OCD) is characterized by unwanted thoughts or behaviors that seem impossible to stop or control. If you have OCD, you may feel troubled by obsessions, such as a recurring worry that you forgot to turn off the oven or that you might hurt someone. You may also suffer from uncontrollable compulsions, such as washing your hands over and over.

*Hoarding disorder
Hoarding disorder is a chronic difficulty discarding possessions, accompanied by a dysfunctional attachment to even worthless items. It can lead to excessive accumulation of possessions (or animals) and a cluttered living space. You may attribute emotion to inanimate objects, have a strong sentimental attachment to items, or see the use in any object. These beliefs can make discarding items overwhelm you with feelings of anxiety, guilt, or sadness.

*Phobias and irrational fears
A phobia is an unrealistic or exaggerated fear of a specific object, activity, or situation that in reality presents little to no danger. Common phobias include fear of animals (such as snakes and spiders), fear of flying, and fear of needles. In the case of a severe phobia, you might go to extreme lengths to avoid the object of your fear. Unfortunately, avoidance only strengthens the phobia.

*Social anxiety disorder
If you have a debilitating fear of being viewed negatively by others and humiliated in public, you may have social anxiety disorder, also known as social phobia. It can be thought of as extreme shyness and in severe cases, social situations are avoided altogether. Performance anxiety (better known as stage fright) is the most common type of social phobia.

*Post-traumatic stress disorder (PTSD)
Post-traumatic stress disorder (PTSD) is an extreme anxiety disorder that can occur in the aftermath of a traumatic or life-threatening event. PTSD can be thought of as a panic attack that rarely, if ever, lets up. Symptoms of PTSD include flashbacks or nightmares about the incident, hypervigilance, startling easily, withdrawing from others, and avoiding situations that remind you of the event.

*Separation anxiety disorder
While separation anxiety is a normal stage of development, if anxieties intensify or are persistent enough to get in the way of school or other activities, your child may have separation anxiety disorder. They may become agitated at just the thought of being away from mom or dad and complain of sickness to avoid playing with friends or going to school.`
  },
  {
    title: "Anxiety causes",
    content: `The specific causes of anxiety can vary depending on the type of anxiety disorder you’re dealing with. However, anxiety may often be the result of multiple factors, including genetics and life experiences.

*Genetics. Studies of twins and families indicate that, to some degree, anxiety may be hereditary. In other words, some people may simply be more genetically prone to being anxious.
*Stressful or traumatic past events. Experiencing physical or emotional abuse and neglect can trigger an anxiety disorder. For example, being bullied can increase the risk of high anxiety.
*Learned behavior. If you grew up with parents who were fearful and focused on worst-case situations, you might have adopted their nervous tendencies.
*Physical conditions. Conditions that cause chronic pain can contribute to an increase in overall anxiety.
*Stressful life circumstances can also trigger a short- or long-term uptick in your anxiety levels, such as sleep deprivation, divorce, or bereavement.`
  },
  {
    title: "How to deal with anxiety",
    content: `Not everyone who worries a lot has an anxiety disorder. You may feel anxious because of an overly demanding schedule, lack of exercise or sleep, pressure at home or work, or even from too much caffeine. The bottom line is that if your lifestyle is unhealthy and stressful, you’re more likely to feel anxious—whether or not you actually have an anxiety disorder.

[Read: I Feel Anxious: Tips for Dealing with Anxiety]

The following tips can help to lower anxiety and manage symptoms of a disorder:
Tip 1: Ease your stress  
Everyday stressors, whether they include financial hurdles or interactions with difficult family members, can contribute to your overall anxiety. If your stress levels are through the roof, stress management can help.
Lighten your load. Look at your responsibilities and see if there are any you can give up, turn down, or delegate to others. For example, practice politely saying “no” to taking on extra tasks in the workplace, or ask your spouse to help out more around the house when you’re feeling overwhelmed.
Practice relaxation techniques. When practiced regularly relaxation techniques such as mindfulness meditation, progressive muscle relaxation, and deep breathing can reduce anxiety symptoms.
Put a stop to chronic worrying. Worrying is a mental habit you can learn how to break. Strategies such as creating a worry period, challenging anxious thoughts, and learning to accept uncertainty can significantly reduce worry and calm your anxious thoughts.

Tip 2: Care for your body
Your daily self-care habits can have a significant impact on your anxiety levels. In short, the better you treat yourself, the less likely you are to feel stressed out, fatigued, and negative throughout the day.  
Exercise regularly. Exercise is a natural stress buster and anxiety reliever. To achieve the maximum benefit, aim for at least 30 minutes of aerobic exercise on most days (broken up into short periods if that’s easier).
Get enough sleep. Research shows that a lack of sleep can exacerbate anxious thoughts and feelings, so try to get seven to nine hours of quality sleep a night.
Be smart about caffeine, alcohol, and nicotine. Caffeine and alcohol can make anxiety worse. And while it may seem like cigarettes are calming, nicotine is actually a powerful stimulant that leads to higher, not lower, levels of anxiety.

Tip 3: Shift your perception of anxiety and anxiety attacks
In some cases, the physical sensations that accompany anxiety—the shaking, the knot in your stomach, the rapid heartbeat—become more things that you fear and try to avoid. Rather than living in fear of anxiety symptoms, though, it may help to view them as temporary and natural—something to accept and learn to work with.
In his book, “Dare: The New Way to End Anxiety,” author Barry McDonagh offers a four-step process to shifting your perception of anxiety: DARE.
Defuse. You might have noticed that anxiety builds on internal “what if” questions. “What if my anxiety spirals out of control?” “What if everyone notices me trembling?” Respond to those “what if” questions with, “So what?” Remind yourself that you’ve experienced anxiety before, and it’s harmless.
Accept. Allow the sensations to exist without trying to fight them off. You don’t need to control that rapid heartbeat. Just let it be. Resist the urge to label anxiety symptoms as “good” or “bad.”
Run towards it. Tell yourself that you’re not anxious. You’re actually just excited. Demand that the sensations increase. Think of this as “calling anxiety’s bluff.” The purpose of this is to show yourself that anxiety really is harmless—it’s just a flood of adrenaline. It’s your perception of that energy that is important.
Engage. Once anxiety begins to subside, don’t fixate on the fleeting feelings. Instead, move on to a new activity. Focus all of your senses on whatever you’re doing. This helps ground you in the present again.
When trying the DARE technique, it might help to visualize anxiety as a little creature that visits you on occasion. You allow it to exist, maybe even embrace it, and then, eventually, it will wander off.

Tip 4: Connect with others 
Loneliness and isolation can trigger or worsen anxiety, while talking about your worries face to face can often make them seem less overwhelming. Make it a point to regularly meet up with friends, join a self-help or support group, or share your worries and concerns with a trusted loved one.
Expand your social circle. If you feel like you don’t currently have enough social support, know that it’s never too late to make new friends and acquaintances. From joining clubs that relate to your favorite hobbies to trying out volunteer opportunities, there’s no shortage of ways to branch out.
Look to people who understand your condition. If you have a specific anxiety disorder, such as social anxiety disorder, consider looking for a support group that focuses on that condition. This will give you an opportunity to talk to people who truly understand what you’re going through. You might also learn or share coping techniques..`
  },
  {
    title:"When to seek professional help for anxiety and anxiety attacks",
    content:`While self-help coping strategies can be very effective, if your worries, fears, or anxiety attacks have become so great that they’re causing extreme distress or disrupting your daily routine, it’s important to seek professional help.
If you’re experiencing a lot of physical symptoms, you should start by getting a medical checkup. Your doctor can check to make sure that your anxiety isn’t caused by a medical condition, such as a thyroid problem, hypoglycemia, or asthma. Since certain drugs and supplements can cause anxiety, your doctor will also want to know about any prescriptions, over-the-counter medications, herbal remedies, and recreational drugs you’re taking.
If your physician rules out a medical cause, the next step is to consult with a therapist who has experience treating anxiety disorders. The therapist will work with you to determine the cause and type of your disorder and devise a course of treatment.`
  },
 {
  title:"Anxiety treatment",
  content:`Anxiety disorders respond very well to in-person and online therapy—and often in a relatively short amount of time. The specific treatment approach depends on the type of anxiety disorder and its severity. But in general, most are treated with therapy, medication, or some combination of the two.
Cognitive-behavioral therapy and exposure therapy are types of behavioral therapy, meaning they focus on behavior rather than on underlying psychological conflicts or issues from the past. They can help with issues such as panic attacks, generalized anxiety, and phobias.
Cognitive-behavior therapy (CBT) helps you identify and challenge the negative thinking patterns and irrational beliefs that fuel your anxiety. As well as in-person CBT therapists, there are also online CBT platforms.
Exposure therapy encourages you to confront your fears and anxieties in a safe, controlled environment. Through gradual exposure to the feared object or situation, either in your imagination or in reality, you gain a greater sense of control. As you face your fear without being harmed, your anxiety will diminish.
If you have anxiety that’s severe enough to interfere with your ability to function, medication may help relieve some symptoms. However, anxiety medications can be habit forming and cause unwanted or even dangerous side effects, so be sure to research your options carefully. Many people use anti-anxiety medication when therapy, exercise, or self-help strategies would work just as well or better—minus the side effects and safety concerns. It’s important to weigh the benefits and risks of medication so you can make an informed decision.`
 },
 {
    title:"The role of medication in anxiety treatment",
    content:`When you’re overwhelmed by heart-pounding panic, paralyzed by fear, or exhausted from yet another sleepless night spent worrying, you’ll do just about anything to get relief. And there’s no question that when anxiety is disabling, medication may help. But are drugs always the best answer?

Many different types of medications are used in the treatment of anxiety disorders, including traditional anti-anxiety drugs such as benzodiazepines (typically prescribed for short-term use) and newer options like SSRI antidepressants (often recommended as a long-term anxiety solution). These drugs can provide temporary relief, but they also come with side effects and safety concerns—some significant.
They are also not a cure. In fact, there are many questions about their long-term effectiveness. According to the American Academy of Family Physicians, benzodiazepines lose their therapeutic anti-anxiety effect after 4 to 6 months of regular use. And a recent analysis reported in JAMA Psychiatry found that the effectiveness of SSRIs in treating anxiety has been overestimated, and in some cases is no better than placebo.
What’s more, it can be very difficult to get off anxiety medications without difficult withdrawals, including rebound anxiety that can be worse than your original problem.
I need relief, and I need it now!
So where does that leave you if you’re suffering? Even when anxiety relief comes with side effects and dangers, that can still sound like a fair trade when panic and fear are ruling your life.
The bottom line is that there’s a time and place for anxiety medication. If you have severe anxiety that’s interfering with your ability to function, medication may be helpful—especially as a short-term treatment. However, many people use anti-anxiety medication when therapy, exercise, or other self-help strategies would work just as well or better, minus the drawbacks.
Anxiety medications can ease symptoms, but they’re not right for everyone and they’re not the only answer. It’s up to you to evaluate your options and decide what’s best for you.`
 },
 {
  title:"Benzodiazepines for anxiety",
  content:`Benzodiazepines (also known as tranquilizers) are the most widely prescribed type of medication for anxiety. Drugs such as Xanax (alprazolam), Klonopin (clonazepam), Valium (diazepam), and Ativan (lorazepam) work quickly, typically bringing relief within 30 minutes to an hour. That makes them very effective when taken during a panic attack or another overwhelming anxiety episode. However, they are physically addictive and not recommended for long-term treatment.
Benzodiazepines work by slowing down the nervous system, helping you relax both physically and mentally. But it can also lead to unwanted side effects. The higher the dose, the more intense these side effects typically are—although some people feel sleepy, foggy, and uncoordinated even on low doses. This can cause problems with work, school, or everyday activities such as driving. The medication hangover can last into the next day.

Common side effects of benzodiazepines include:
1.Drowsiness
2.Dizziness
3.Poor balance or coordination
4.Slurred speech
5.Trouble concentrating
6.Memory problems
7.Confusion
8.Stomach upset
9.Headache
10.Blurred vision
Benzodiazepines can make depression worse:-
According to the FDA, benzodiazepines can worsen cases of pre-existing depression, and more recent studies suggest that they may potentially lead to treatment-resistant depression. Furthermore, benzodiazepines can cause emotional blunting or numbness and increase suicidal thoughts and feelings.`
 },
 {
  title:"What is generalized anxiety disorder (GAD)?",
  content:`Everyone gets anxious sometimes, but if your worries and fears are so constant that they interfere with your ability to function and relax, you may have generalized anxiety disorder (GAD). GAD is a common anxiety disorder that involves constant and chronic worrying, nervousness, and tension. Unlike a phobia, where your fear is connected to a specific thing or situation, the anxiety of GAD is diffused—a general feeling of dread or unease that colors your whole life. This anxiety is less intense than a panic attack, but much longer lasting, making normal life difficult and relaxation impossible. Generalized anxiety disorder is mentally and physically exhausting. It drains your energy, interferes with sleep, and wears your body out.
If you have GAD you may worry about the same things that other people do, but you take these worries to a new level. A co-worker’s careless comment about the economy becomes a vision of an imminent pink slip; a phone call to a friend that isn’t immediately returned becomes anxiety that the relationship is in trouble. Sometimes just the thought of getting through the day produces anxiety. You go about your activities filled with exaggerated worry and tension, even when there is little or nothing to provoke them.
Whether you realize that your anxiety is more intense than the situation calls for, or believe that your worrying protects you in some way, the end result is the same. You can’t turn off your anxious thoughts. They keep running through your head, on endless repeat. But no matter how overwhelming things seem now, you can break free from chronic worrying, learn to calm your anxious mind, and regain your sense of hope.`
 },
 {
  title:"Signs and symptoms of GAD",
  content:`Not everyone with generalized anxiety disorder has the same symptoms, but most people experience a combination of emotional, behavioral, and physical symptoms that often fluctuate, becoming worse at times of stress.

Emotional Symptoms of GAD include:
Constant worries running through your head
Feeling like your anxiety is uncontrollable; there is nothing you can do to stop the worrying
Intrusive thoughts about things that make you anxious; you try to avoid thinking about them, but you can’t
An inability to tolerate uncertainty; you need to know what’s going to happen in the future
A pervasive feeling of apprehension or dread
Behavioral symptoms include:
Inability to relax, enjoy quiet time, or be by yourself
Difficulty concentrating or focusing on things
Putting things off because you feel overwhelmed
Avoiding situations that make you anxious
Physical symptoms include:
Feeling tense; having muscle tightness or body aches
Having trouble falling asleep or staying asleep because your mind won’t quit
Feeling edgy, restless, or jumpy
Stomach problems, nausea, diarrhea
GAD symptoms in children
In children, excessive worrying centers on future events, past behaviors, social acceptance, family matters, personal abilities, and school performance. Unlike adults with GAD, children and teens often don’t realize that their anxiety is disproportionate to the situation, so adults need to recognize their symptoms. Along with many of the symptoms that appear in adults, some red flags for GAD in children are:

“What if” fears about situations far in the future.
Perfectionism, excessive self-criticism, and fear of making mistakes.
Feeling that they’re to blame for any disaster, and their worry will keep tragedy from occurring.
The conviction that misfortune is contagious and will happen to them.
Need for frequent reassurance and approval.`
 },
 {
  title:"Treatment for generalized anxiety disorder",
  content:`If you’ve given self-help a fair shot, but still can’t seem to shake your worries and fears, it may be time to see a mental health professional. But remember that professional treatment doesn’t replace self-help. In order to control your GAD symptoms, you’ll still want to make lifestyle changes and look at the ways you think about worrying
Cognitive-behavioral therapy (CBT) is one type of anxiety therapy that is particularly helpful in the treatment of GAD. CBT examines distortions in our ways of looking at the world and ourselves.
A therapist will help you identify automatic negative thoughts that contribute to your anxiety. For example, if you catastrophize—always imagining the worst possible outcome in any given situation—you might challenge this tendency through questions such as, “What is the likelihood that this worst-case scenario will actually come true?” and “What are some positive outcomes that are more likely to happen?”.
There are both in-person and online therapy options for CBT.
The five components of CBT for anxiety are:
*Education. CBT involves learning about generalized anxiety disorder. It also teaches you how to distinguish between helpful and unhelpful worry. An increased understanding of your anxiety encourages a more accepting and proactive response to it.
*Monitoring. You learn to monitor your anxiety, including what triggers it, the specific things you worry about, and the severity and length of a particular episode. This helps you get perspective, as well as track your progress.
*Physical control strategies. CBT for GAD trains you in relaxation techniques to help decrease the physical over-arousal of the “fight or flight” response.
*Cognitive control strategies teach you to realistically evaluate and alter the thinking patterns that contribute to generalized anxiety disorder. As you challenge these negative thoughts, your fears will begin to subside.
*Behavioral strategies. Instead of avoiding situations you fear, CBT teaches you to tackle them head on. You may start by imagining the thing you’re most afraid of. By focusing on your fears without trying to avoid or escape them, you will feel more in control and less anxious.`
 },
 {
  title:"How to stop worrying??",
  content:`Worries, doubts, and anxieties are a normal part of life. It’s natural to worry about an unpaid bill, an upcoming job interview, or a first date. But “normal” worry becomes excessive when it’s persistent and uncontrollable. You worry every day about “what ifs” and worst-case scenarios, you can’t get anxious thoughts out of your head, and it interferes with your daily life.
Constant worrying, negative thinking, and always expecting the worst can take a toll on your emotional and physical health. It can sap your emotional strength, leave you feeling restless and jumpy, cause insomnia, headaches, stomach problems, and muscle tension, and make it difficult to concentrate at work or school.
You may take your negative feelings out on the people closest to you, self-medicate with alcohol or drugs, or try to distract yourself by zoning out in front of screens. Chronic worrying can also be a major symptom of generalized anxiety disorder (GAD), a common anxiety disorder that involves tension, nervousness, and a general feeling of unease that colors your whole life.
If you’re plagued by exaggerated worry and tension, there are steps you can take to turn off anxious thoughts. Chronic worrying is a mental habit that can be broken. You can train your brain to stay calm and look at life from a more balanced, less fearful perspective.`
 },
 {
  title:"Signs you worry too much",
  content:`The consequences of chronic worrying can manifest in various ways. Here are some examples of the physical, mental, and behavioral symptoms of constant worrying:
Restlessness. You may feel physically jittery, or restless and unfocused at work or school because your attention is so focused on your worries.
Fatigue. You can feel exhausted if your body’s stress response is active for too long. You may find yourself sleeping a lot but quickly feeling tired again.
Sleeplessness. On the other hand, your worries can keep you awake at night. You might have a hard time quieting your thoughts before bed, kept awake by the various “what-if” situations running through your head.
Muscle tension and pain. Many people carry stress in their bodies. You might clench your jaw when you’re worried, for example, which can trigger headaches. Or you may adopt a rigid posture, which causes aches and pains in other parts of the body.
Self-medication. You may self-medicate by turning to drugs or alcohol to change how you feel, or try to distract yourself from your worries by gambling or spending too much time online.
Changes in social life. The effects of chronic worrying can also spill over into your social life. You might find that you become short-tempered with people around you, or even self-isolate from others because you feel so emotionally exhausted and on edge.`
 },
 {
  title:"Tips on how to stop worrying",
  content:`Although you can’t stop worrying entirely, there are steps you can take to better manage your anxious thoughts and reduce rumination. Some strategies involve setting aside a specific time to worry, challenging negative thought patterns, and identifying what’s beyond your control. You can also use techniques, such as exercise and meditation, to interrupt anxious spirals. Lastly, opening up to others and building mindfulness are additional ways you can improve your overall well-being.
Not every strategy will work for every person. Experiment with each tip and stick with whatever works best for you.
Tip 1: Create a daily “worry” period
It’s tough to be productive in your daily activities when anxiety and worry are dominating your thoughts and distracting you from work, school, or your home life. This is where the strategy of postponing worrying can help.
Telling yourself to stop worrying doesn’t work. In fact, trying to do so often makes your worries stronger and more persistent. This is because trying to “thought stop” forces you to pay extra attention to the very thought you want to avoid.
But that doesn’t mean there’s nothing you can do to control worry. You just need a different approach. This is where the strategy of postponing worrying comes in. Rather than trying to stop or get rid of an anxious thought, give yourself permission to have it, but put off dwelling on it until later.
Create a “worry period.” Choose a set time and place for worrying. It should be the same every day (e.g. in the living room from 5:00 to 5:20 p.m.) and early enough that it won’t make you anxious right before bedtime. During your worry period, you’re allowed to worry about whatever’s on your mind. The rest of the day, however, is a worry-free zone.
Write down your worries. If an anxious thought or worry comes into your head during the day, make a brief note of it and then continue about your day. Remind yourself that you’ll have time to think about it later, so there’s no need to worry about it right now. Also, writing down your thoughts—on a pad or on your phone or computer—is much harder work than simply thinking them, so your worries are more likely to lose their power.
Go over your “worry list” during the worry period. If the thoughts you wrote down are still bothering you, allow yourself to worry about them, but only for the amount of time you’ve specified for your worry period. As you examine your worries in this way, you’ll often find it easier to develop a more balanced perspective. And if your worries don’t seem important any more, simply cut your worry period short and enjoy the rest of your day.
Postponing worrying is effective because it breaks the habit of dwelling on worries when you’ve got other things to do, yet there’s no struggle to suppress the thought or judge it. You simply save it for later. And as you develop the ability to postpone your anxious thoughts, you’ll start to realize that you have more control than you think.

Tip 2: Challenge anxious thoughts
If you suffer from chronic anxiety and worry, chances are you look at the world in ways that make it seem more threatening than it really is. For example, you may overestimate the possibility that things will turn out badly, jump immediately to worst-case scenarios, or treat every anxious thought as if it were fact. You may also discredit your own ability to handle life’s problems, assuming you’ll fall apart at the first sign of trouble. These irrational, pessimistic attitudes are known as cognitive distortions.
Although cognitive distortions aren’t based on reality, they’re not easy to give up. Often, they’re part of a lifelong pattern of thinking that’s become so automatic you’re not even completely aware of it.
Cognitive distortions that add to worry, anxiety, and stress include:
All-or-nothing thinking. Looking at things in black-or-white categories, with no middle ground. “If everything is not perfect, I’m a total failure.”
Overgeneralization. Generalizing from a single negative experience, expecting it to hold true forever. “I didn’t get hired for the job. I’ll never get any job.”
The mental filter. Focusing on the negatives while filtering out the positives. Noticing the one thing that went wrong, rather than all the things that went right. “I got the last question on the test wrong. I’m an idiot.”
Diminishing the positive. Coming up with reasons why positive events don’t count. “I did well on the presentation, but that was just dumb luck.”
Jumping to conclusions. Making negative interpretations without actual evidence. You act like a mind reader: “I can tell she secretly hates me.” Or a fortune teller: “I just know something terrible is going to happen.”
Catastrophizing. Expecting the worst-case scenario to happen. “The pilot said we’re in for some turbulence. The plane’s going to crash!”
Emotional reasoning. Believing that the way you feel reflects reality. “I feel like such a fool. Everyone must be laughing at me.”
‘Shoulds’ and ‘should-nots.’ Holding yourself to a strict list of what you should and shouldn’t do and beating yourself up if you break any of the rules. “I should never have tried starting a conversation with her. I’m such a moron.”
Labeling. Criticizing yourself based on mistakes and perceived shortcomings. “I’m a failure; I’m boring; I deserve to be alone.”
Personalization. Assuming responsibility for things that are outside your control. “It’s my fault my son got in an accident. I should have warned him to drive carefully in the rain.”

How to challenge these thoughts?
In order to break these bad thinking habits and stop the worry and anxiety they bring, you need to retrain your brain. Once you identify the negative thoughts, instead of viewing them as facts, treat them as hypotheses you’re testing out. As you examine and challenge your worries and anxious thoughts, you’ll develop a more balanced perspective.

During your worry period, challenge your negative thoughts by asking yourself:
What’s the evidence that the thought is true? That it’s not true?
Is there a more positive, realistic way of looking at the situation?
What’s the probability that what I’m scared of will actually happen? If the probability is low, what are some more likely outcomes?
Is the thought helpful? How will worrying about it help me and how will it hurt me?
What would I say to a friend who had this worry?

Tip 3: Ask yourself if a worry is something you can control
Research shows that while you’re worrying, you temporarily feel less anxious. Running over the problem in your head distracts you from your emotions and makes you feel like you’re getting something accomplished. But worrying and problem solving are two very different things.
Problem solving involves evaluating a situation, coming up with concrete steps for dealing with it, and then putting the plan into action. Worrying, on the other hand, rarely leads to solutions. No matter how much time you spend dwelling on worst-case scenarios, you’re no more prepared to deal with them should they actually happen.
Is your worry something you can control?
If a worry pops into your head, start by asking yourself whether the problem is something you can actually solve or control.
Is the problem something you’re currently facing, rather than an imaginary what-if?
If the problem is an imaginary what-if, how likely is it to happen? Is your concern realistic?
Can you do something about the problem or prepare for it, or is it out of your control?
Productive, solvable worries are those you can take action on right away. For example, if you’re worried about your bills, you could call your creditors to see about flexible payment options.
Unproductive, uncontrollable worries are those for which there is no corresponding action. “What if I get cancer someday?” or “What if my kid gets into an accident?”
If the worry is in your control, start brainstorming
Make a list of all the possible solutions you can think of. Try not to get too hung up on finding the perfect solution to a worry. Focus on the things you have the power to change, rather than the circumstances or realities beyond your control.
After you’ve evaluated your options, make a plan of action. Once you have a plan and start doing something about the problem, you’ll feel much less anxious.
If the worry is NOT in your control, accept the uncertainty
If you’re a chronic worrier, the vast majority of your anxious thoughts probably fall in this camp. Worrying is often a way we try to predict what the future has in store—a way to prevent unpleasant surprises and control the outcome. The problem is, it doesn’t work.
Thinking about all the things that could go wrong doesn’t make life any more predictable. You may feel safer when you’re worrying, but it’s just an illusion. Focusing on worst-case scenarios will only keep you from enjoying the good things you have in the present. To stop worrying, you need to learn how to deal with the uncertainty that we all face in life.
Tackle your need for immediate answers. Do you tend to predict bad things will happen just because they are uncertain? What is the likelihood they will? Given the likelihood is very low, is it possible to live with the small chance that something negative may happen?
Discover how others cope with uncertainty. Ask your friends and family how they cope with uncertainty in specific situations. Could you do the same? For example, if you’re worried about your child taking the bus to school, asking a neighbor how they deal with the uncertainty could help you feel less anxious. 
Tune into your emotions. Worrying about uncertainty is often a way to avoid unpleasant emotions. But you can’t worry your emotions away. While you’re worrying, your feelings are temporarily suppressed, but as soon as you stop, they bounce back. And then, you start worrying about your feelings: “What’s wrong with me? I shouldn’t feel this way!”
By using HelpGuide’s free Emotional Intelligence Toolkit, you can tune into your emotions and  start to accept your feelings, even those that are uncomfortable or don’t make sense.

Tip 4: Interrupt the cycle of worry and anxious thoughts
If you worry excessively, it can seem like negative thoughts are running through your head on endless repeat. You may feel like you’re spiraling out of control, going crazy, or about to burn out under the weight of all this anxiety.
But there are steps you can take right now to interrupt all those anxious thoughts, lower your stress, and give yourself a time out from relentless worrying.
Get up and get moving. Exercise is a natural and effective anti-anxiety treatment because it releases endorphins which relieve tension and stress, boost energy, and enhance your sense of well-being. Even more importantly, by really focusing on how your body feels as you move, you can interrupt the constant flow of worries running through your head.
Pay attention to the sensation of your feet hitting the ground as you walk, run, or dance, for example, or the rhythm of your breathing, or the feeling of the sun or wind on your skin.
Take a yoga or tai chi class. By focusing your mind on your movements and breathing, practicing yoga or tai chi keeps your attention on the present, helping to clear your mind and lead to a relaxed state.
Meditate. Meditation works by switching your focus from worrying about the future or dwelling on the past to what’s happening right now. By being fully engaged in the present moment, you can interrupt the endless loop of negative thoughts and worries.
You don’t need to sit cross-legged, light candles or incense, or chant. Simply find a quiet, comfortable place and choose one of our free audio meditations that can guide you through the meditation process.
Practice progressive muscle relaxation. This can help you break the endless loop of worrying by focusing your mind on your body instead of your thoughts. By alternately tensing and then releasing different muscle groups in your body, you release muscle tension in your body. And as your body relaxes, your mind will follow.
Try deep breathing. When you worry, you become anxious and breathe faster, often leading to further anxiety. But by practicing deep breathing exercises, you can calm your mind and quiet negative thoughts.
Relaxation techniques can change the brain
While the above relaxation techniques can provide some immediate respite from worry and anxiety, practicing them regularly can also change your brain. Research has shown that regular meditation, for example, can boost activity on the left side of the prefrontal cortex, the area of the brain responsible for feelings of serenity and joy.
The more you practice, the greater the anxiety relief you’ll experience and the more control you’ll start to feel over your anxious thoughts and worries.

Tip 5: Talk about your worrying
It may seem like a simplistic solution, but talking face to face with a trusted friend, family member, or therapist—someone who will listen to you without judging, criticizing, or continually being distracted—is one of the most effective ways to calm your nervous system and diffuse anxiety. When your worries start spiraling, talking them over can make them seem far less threatening.
Speak to a Licensed Therapist
BetterHelp is an online therapy service that matches you to licensed, accredited therapists who can help with depression, anxiety, relationships, and more. Take the assessment and get matched with a therapist in as little as 48 hours.
Take Assessment
HelpGuide is user supported. We earn a commission if you sign up for BetterHelp’s services after clicking through from this site. Learn more
Keeping worries to yourself only causes them to build up until they seem overwhelming. But saying them out loud can often help you to make sense of what you’re feeling and put things in perspective. If your fears are unwarranted, verbalizing them can expose them for what they are—needless worries. And if your fears are justified, sharing them with someone else can produce solutions that you may not have thought of alone.
Build a strong support system. Human beings are social creatures. We’re not meant to live in isolation. But a strong support system doesn’t necessarily mean a vast network of friends. Don’t underestimate the benefit of a few people you can trust and count on to be there for you. And if you don’t feel that you have anyone to confide in, it’s never too late to build new friendships.
Know who to avoid when you’re feeling anxious. Your anxious take on life may be something you learned when you were growing up. If your mother is a chronic worrier, she is not the best person to call when you’re feeling anxious—no matter how close you are. When considering who to turn to, ask yourself whether you tend to feel better or worse after talking to that person about a problem.
Try helping others. The social contact aspect of volunteering can have a profound effect on your overall psychological well-being. While nothing relieves stress better than a meaningful connection to another person, working with pets and other animals has also been shown to reduce stress and anxiety.

Tip 6: Practice mindfulness
Worrying is usually focused on the future—on what might happen and what you’ll do about it—or on the past, rehashing the things you’ve said or done. The centuries-old practice of mindfulness can help you break free of your worries by bringing your attention back to the present.
This strategy is based on observing your worries and then letting them go, helping you identify where your thinking is causing problems and getting in touch with your emotions.
Acknowledge and observe your worries. Don’t try to ignore, fight, or control them like you usually would. Instead, simply observe them as if from an outsider’s perspective, without reacting or judging.
Let your worries go. Notice that when you don’t try to control the anxious thoughts that pop up, they soon pass, like clouds moving across the sky. It’s only when you engage your worries that you get stuck.
Stay focused on the present. Pay attention to the way your body feels, the rhythm of your breathing, your ever-changing emotions, and the thoughts that drift across your mind. If you find yourself getting stuck on a particular thought, bring your attention back to the present moment.
Repeat daily. Using mindfulness to stay focused on the present is a simple concept, but it takes time and regular practice to reap the benefits. At first, you’ll probably find that your mind keeps wandering back to your worries. Try not to get frustrated. Each time you draw your focus back to the present, you’re reinforcing a new mental habit that will help you break free of the negative worry cycle.
Basic mindfulness meditation:-
Find a quiet place
Sit on a comfortable chair or cushion, with your back straight, and your hands resting on the tops of your upper legs.
Close your eyes and breathe in through your nose, allowing the air downward into your lower belly. Let your abdomen expand fully.
Breathe out through your mouth.
Focus on an aspect of your breathing, such as the sensations of air flowing into your nostrils and out of your mouth, or your belly rising and falling as you inhale and exhale.
If your mind starts to wander, return your focus to your breathing with no judgment.
Try to meditate 3 or 4 times per week for 10 minutes per day. Every minute counts.
[Listen: Mindful Breathing Meditation]
`
 },
];

const Article = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex min-h-screen bg-white text-gray-800 font-sans">
      {/* Sidebar */}
      <aside className="w-72 border-r border-gray-200">
        <div className="p-4 border-b border-gray-200 text-sm text-gray-600">

        </div>

        <ul className="mt-4 space-y-1">
          {articleData.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer px-4 py-2 text-sm transition-all ${activeIndex === index
                ? "bg-green-100 border-l-4 border-green-700 font-semibold text-green-900"
                : "hover:bg-gray-100"
                }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-green-900 mb-6">
          {articleData[activeIndex].title}
        </h1>
        <p className="text-base leading-7 whitespace-pre-line">
          {articleData[activeIndex].content}
        </p>
      </main>
    </div>
  );
};

export default Article;
