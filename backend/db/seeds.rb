Notification.destroy_all

notification1 = Notification.create!(title: 'Donation Thank You Letter', description: 'Send thank you letter to donors.')
notification2 = Notification.create!(title: "Program Outcomes", description: "Create materials capturing program outcomes for board meetings and grant applications.")
notification3 = Notification.create!(title: 'Fundraising Dept Meeting', description: 'Meeting to finalize details for upcoming fundraiser event.')
notification4 = Notification.create!(title: "Grant Research", description: "Start research on grant applications for the upcoming year.")
notification5 = Notification.create!(title: 'Marketing Strategy', description: 'Meeting to discuss marketing strategy for 2023.')
notification6 = Notification.create!(title: 'Grant Applications', description: 'Complete remaining grant applications.')

puts 'Successfully added seed data.'