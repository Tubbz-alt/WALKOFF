from unittest import TestCase
from apps.FacebookUserPost import main


class TestMain(TestCase):
    def setUp(self):
        self.app = main.Main()

    def test_add_fb_user_and_post_to_wall(self):
        args = {"user_access_token": "Get from Facebook Developer Account",
                "user_id": "me"}
        self.assertEqual(self.app.add_facebook_user(args), 0)

        args = {"message": "Explore WALKOFF\nat https://github.com/iadgov/WALKOFF\n :D :D :D :D :D"}
        self.assertTrue("id" in self.app.post_to_user_wall(args))
