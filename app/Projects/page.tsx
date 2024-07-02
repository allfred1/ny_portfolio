"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import DropMenu from "@/components/Framer/DropMenu"
import Card from "./Card"

const CACHE_KEY = "github_repos_cache"
const CACHE_EXPIRATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

const fallbackData = [
  {
    id: 750309823,
    node_id: "R_kgDOLLjRvw",
    name: "AimTracker",
    full_name: "allfred1/AimTracker",
    private: false,
    owner: {
      login: "allfred1",
      id: 87396510,
      node_id: "MDQ6VXNlcjg3Mzk2NTEw",
      avatar_url: "https://avatars.githubusercontent.com/u/87396510?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/allfred1",
      html_url: "https://github.com/allfred1",
      followers_url: "https://api.github.com/users/allfred1/followers",
      following_url: "https://api.github.com/users/allfred1/following{/other_user}",
      gists_url: "https://api.github.com/users/allfred1/gists{/gist_id}",
      starred_url: "https://api.github.com/users/allfred1/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/allfred1/subscriptions",
      organizations_url: "https://api.github.com/users/allfred1/orgs",
      repos_url: "https://api.github.com/users/allfred1/repos",
      events_url: "https://api.github.com/users/allfred1/events{/privacy}",
      received_events_url: "https://api.github.com/users/allfred1/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/allfred1/AimTracker",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/allfred1/AimTracker",
    forks_url: "https://api.github.com/repos/allfred1/AimTracker/forks",
    keys_url: "https://api.github.com/repos/allfred1/AimTracker/keys{/key_id}",
    collaborators_url: "https://api.github.com/repos/allfred1/AimTracker/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/allfred1/AimTracker/teams",
    hooks_url: "https://api.github.com/repos/allfred1/AimTracker/hooks",
    issue_events_url: "https://api.github.com/repos/allfred1/AimTracker/issues/events{/number}",
    events_url: "https://api.github.com/repos/allfred1/AimTracker/events",
    assignees_url: "https://api.github.com/repos/allfred1/AimTracker/assignees{/user}",
    branches_url: "https://api.github.com/repos/allfred1/AimTracker/branches{/branch}",
    tags_url: "https://api.github.com/repos/allfred1/AimTracker/tags",
    blobs_url: "https://api.github.com/repos/allfred1/AimTracker/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/allfred1/AimTracker/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/allfred1/AimTracker/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/allfred1/AimTracker/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/allfred1/AimTracker/statuses/{sha}",
    languages_url: "https://api.github.com/repos/allfred1/AimTracker/languages",
    stargazers_url: "https://api.github.com/repos/allfred1/AimTracker/stargazers",
    contributors_url: "https://api.github.com/repos/allfred1/AimTracker/contributors",
    subscribers_url: "https://api.github.com/repos/allfred1/AimTracker/subscribers",
    subscription_url: "https://api.github.com/repos/allfred1/AimTracker/subscription",
    commits_url: "https://api.github.com/repos/allfred1/AimTracker/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/allfred1/AimTracker/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/allfred1/AimTracker/comments{/number}",
    issue_comment_url: "https://api.github.com/repos/allfred1/AimTracker/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/allfred1/AimTracker/contents/{+path}",
    compare_url: "https://api.github.com/repos/allfred1/AimTracker/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/allfred1/AimTracker/merges",
    archive_url: "https://api.github.com/repos/allfred1/AimTracker/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/allfred1/AimTracker/downloads",
    issues_url: "https://api.github.com/repos/allfred1/AimTracker/issues{/number}",
    pulls_url: "https://api.github.com/repos/allfred1/AimTracker/pulls{/number}",
    milestones_url: "https://api.github.com/repos/allfred1/AimTracker/milestones{/number}",
    notifications_url: "https://api.github.com/repos/allfred1/AimTracker/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/allfred1/AimTracker/labels{/name}",
    releases_url: "https://api.github.com/repos/allfred1/AimTracker/releases{/id}",
    deployments_url: "https://api.github.com/repos/allfred1/AimTracker/deployments",
    created_at: "2024-01-30T11:57:08Z",
    updated_at: "2024-01-30T12:02:58Z",
    pushed_at: "2024-01-30T12:05:32Z",
    git_url: "git://github.com/allfred1/AimTracker.git",
    ssh_url: "git@github.com:allfred1/AimTracker.git",
    clone_url: "https://github.com/allfred1/AimTracker.git",
    svn_url: "https://github.com/allfred1/AimTracker",
    homepage: "https://allfred1.github.io/AimTracker/",
    size: 3,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 723751079,
    node_id: "R_kgDOKyOQpw",
    name: "airpods",
    full_name: "allfred1/airpods",
    private: false,
    owner: {
      login: "allfred1",
      id: 87396510,
      node_id: "MDQ6VXNlcjg3Mzk2NTEw",
      avatar_url: "https://avatars.githubusercontent.com/u/87396510?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/allfred1",
      html_url: "https://github.com/allfred1",
      followers_url: "https://api.github.com/users/allfred1/followers",
      following_url: "https://api.github.com/users/allfred1/following{/other_user}",
      gists_url: "https://api.github.com/users/allfred1/gists{/gist_id}",
      starred_url: "https://api.github.com/users/allfred1/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/allfred1/subscriptions",
      organizations_url: "https://api.github.com/users/allfred1/orgs",
      repos_url: "https://api.github.com/users/allfred1/repos",
      events_url: "https://api.github.com/users/allfred1/events{/privacy}",
      received_events_url: "https://api.github.com/users/allfred1/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/allfred1/airpods",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/allfred1/airpods",
    forks_url: "https://api.github.com/repos/allfred1/airpods/forks",
    keys_url: "https://api.github.com/repos/allfred1/airpods/keys{/key_id}",
    collaborators_url: "https://api.github.com/repos/allfred1/airpods/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/allfred1/airpods/teams",
    hooks_url: "https://api.github.com/repos/allfred1/airpods/hooks",
    issue_events_url: "https://api.github.com/repos/allfred1/airpods/issues/events{/number}",
    events_url: "https://api.github.com/repos/allfred1/airpods/events",
    assignees_url: "https://api.github.com/repos/allfred1/airpods/assignees{/user}",
    branches_url: "https://api.github.com/repos/allfred1/airpods/branches{/branch}",
    tags_url: "https://api.github.com/repos/allfred1/airpods/tags",
    blobs_url: "https://api.github.com/repos/allfred1/airpods/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/allfred1/airpods/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/allfred1/airpods/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/allfred1/airpods/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/allfred1/airpods/statuses/{sha}",
    languages_url: "https://api.github.com/repos/allfred1/airpods/languages",
    stargazers_url: "https://api.github.com/repos/allfred1/airpods/stargazers",
    contributors_url: "https://api.github.com/repos/allfred1/airpods/contributors",
    subscribers_url: "https://api.github.com/repos/allfred1/airpods/subscribers",
    subscription_url: "https://api.github.com/repos/allfred1/airpods/subscription",
    commits_url: "https://api.github.com/repos/allfred1/airpods/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/allfred1/airpods/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/allfred1/airpods/comments{/number}",
    issue_comment_url: "https://api.github.com/repos/allfred1/airpods/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/allfred1/airpods/contents/{+path}",
    compare_url: "https://api.github.com/repos/allfred1/airpods/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/allfred1/airpods/merges",
    archive_url: "https://api.github.com/repos/allfred1/airpods/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/allfred1/airpods/downloads",
    issues_url: "https://api.github.com/repos/allfred1/airpods/issues{/number}",
    pulls_url: "https://api.github.com/repos/allfred1/airpods/pulls{/number}",
    milestones_url: "https://api.github.com/repos/allfred1/airpods/milestones{/number}",
    notifications_url: "https://api.github.com/repos/allfred1/airpods/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/allfred1/airpods/labels{/name}",
    releases_url: "https://api.github.com/repos/allfred1/airpods/releases{/id}",
    deployments_url: "https://api.github.com/repos/allfred1/airpods/deployments",
    created_at: "2023-11-26T16:51:17Z",
    updated_at: "2023-11-26T17:10:15Z",
    pushed_at: "2023-11-26T17:01:02Z",
    git_url: "git://github.com/allfred1/airpods.git",
    ssh_url: "git@github.com:allfred1/airpods.git",
    clone_url: "https://github.com/allfred1/airpods.git",
    svn_url: "https://github.com/allfred1/airpods",
    homepage: "https://allfred1.github.io/airpods/",
    size: 1649,
    stargazers_count: 0,
    watchers_count: 0,
    stars: 24,
    language: "SCSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 689286073,
    node_id: "R_kgDOKRWruQ",
    name: "allfred1",
    full_name: "allfred1/allfred1",
    private: false,
    owner: {
      login: "allfred1",
      id: 87396510,
      node_id: "MDQ6VXNlcjg3Mzk2NTEw",
      avatar_url: "https://avatars.githubusercontent.com/u/87396510?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/allfred1",
      html_url: "https://github.com/allfred1",
      followers_url: "https://api.github.com/users/allfred1/followers",
      following_url: "https://api.github.com/users/allfred1/following{/other_user}",
      gists_url: "https://api.github.com/users/allfred1/gists{/gist_id}",
      starred_url: "https://api.github.com/users/allfred1/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/allfred1/subscriptions",
      organizations_url: "https://api.github.com/users/allfred1/orgs",
      repos_url: "https://api.github.com/users/allfred1/repos",
      events_url: "https://api.github.com/users/allfred1/events{/privacy}",
      received_events_url: "https://api.github.com/users/allfred1/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/allfred1/allfred1",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/allfred1/allfred1",
    forks_url: "https://api.github.com/repos/allfred1/allfred1/forks",
    keys_url: "https://api.github.com/repos/allfred1/allfred1/keys{/key_id}",
    collaborators_url: "https://api.github.com/repos/allfred1/allfred1/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/allfred1/allfred1/teams",
    hooks_url: "https://api.github.com/repos/allfred1/allfred1/hooks",
    issue_events_url: "https://api.github.com/repos/allfred1/allfred1/issues/events{/number}",
    events_url: "https://api.github.com/repos/allfred1/allfred1/events",
    assignees_url: "https://api.github.com/repos/allfred1/allfred1/assignees{/user}",
    branches_url: "https://api.github.com/repos/allfred1/allfred1/branches{/branch}",
    tags_url: "https://api.github.com/repos/allfred1/allfred1/tags",
    blobs_url: "https://api.github.com/repos/allfred1/allfred1/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/allfred1/allfred1/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/allfred1/allfred1/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/allfred1/allfred1/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/allfred1/allfred1/statuses/{sha}",
    languages_url: "https://api.github.com/repos/allfred1/allfred1/languages",
    stargazers_url: "https://api.github.com/repos/allfred1/allfred1/stargazers",
    contributors_url: "https://api.github.com/repos/allfred1/allfred1/contributors",
    subscribers_url: "https://api.github.com/repos/allfred1/allfred1/subscribers",
    subscription_url: "https://api.github.com/repos/allfred1/allfred1/subscription",
    commits_url: "https://api.github.com/repos/allfred1/allfred1/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/allfred1/allfred1/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/allfred1/allfred1/comments{/number}",
    issue_comment_url: "https://api.github.com/repos/allfred1/allfred1/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/allfred1/allfred1/contents/{+path}",
    compare_url: "https://api.github.com/repos/allfred1/allfred1/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/allfred1/allfred1/merges",
    archive_url: "https://api.github.com/repos/allfred1/allfred1/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/allfred1/allfred1/downloads",
    issues_url: "https://api.github.com/repos/allfred1/allfred1/issues{/number}",
    pulls_url: "https://api.github.com/repos/allfred1/allfred1/pulls{/number}",
    milestones_url: "https://api.github.com/repos/allfred1/allfred1/milestones{/number}",
    notifications_url: "https://api.github.com/repos/allfred1/allfred1/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/allfred1/allfred1/labels{/name}",
    releases_url: "https://api.github.com/repos/allfred1/allfred1/releases{/id}",
    deployments_url: "https://api.github.com/repos/allfred1/allfred1/deployments",
    created_at: "2023-09-09T10:36:34Z",
    updated_at: "2024-06-29T17:59:31Z",
    pushed_at: "2024-06-29T17:59:27Z",
    git_url: "git://github.com/allfred1/allfred1.git",
    ssh_url: "git@github.com:allfred1/allfred1.git",
    clone_url: "https://github.com/allfred1/allfred1.git",
    svn_url: "https://github.com/allfred1/allfred1",
    homepage: null,
    size: 68,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "allfred1",
  },
  {
    id: 753949458,
    node_id: "R_kgDOLPBbEg",
    name: "BungerJS",
    full_name: "allfred1/BungerJS",
    private: false,
    owner: {
      login: "allfred1",
      id: 87396510,
      node_id: "MDQ6VXNlcjg3Mzk2NTEw",
      avatar_url: "https://avatars.githubusercontent.com/u/87396510?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/allfred1",
      html_url: "https://github.com/allfred1",
      followers_url: "https://api.github.com/users/allfred1/followers",
      following_url: "https://api.github.com/users/allfred1/following{/other_user}",
      gists_url: "https://api.github.com/users/allfred1/gists{/gist_id}",
      starred_url: "https://api.github.com/users/allfred1/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/allfred1/subscriptions",
      organizations_url: "https://api.github.com/users/allfred1/orgs",
      repos_url: "https://api.github.com/users/allfred1/repos",
      events_url: "https://api.github.com/users/allfred1/events{/privacy}",
      received_events_url: "https://api.github.com/users/allfred1/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/allfred1/BungerJS",
    description: "pw",
    fork: false,
    url: "https://api.github.com/repos/allfred1/BungerJS",
    forks_url: "https://api.github.com/repos/allfred1/BungerJS/forks",
    keys_url: "https://api.github.com/repos/allfred1/BungerJS/keys{/key_id}",
    collaborators_url: "https://api.github.com/repos/allfred1/BungerJS/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/allfred1/BungerJS/teams",
    hooks_url: "https://api.github.com/repos/allfred1/BungerJS/hooks",
    issue_events_url: "https://api.github.com/repos/allfred1/BungerJS/issues/events{/number}",
    events_url: "https://api.github.com/repos/allfred1/BungerJS/events",
    assignees_url: "https://api.github.com/repos/allfred1/BungerJS/assignees{/user}",
    branches_url: "https://api.github.com/repos/allfred1/BungerJS/branches{/branch}",
    tags_url: "https://api.github.com/repos/allfred1/BungerJS/tags",
    blobs_url: "https://api.github.com/repos/allfred1/BungerJS/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/allfred1/BungerJS/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/allfred1/BungerJS/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/allfred1/BungerJS/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/allfred1/BungerJS/statuses/{sha}",
    languages_url: "https://api.github.com/repos/allfred1/BungerJS/languages",
    stargazers_url: "https://api.github.com/repos/allfred1/BungerJS/stargazers",
    contributors_url: "https://api.github.com/repos/allfred1/BungerJS/contributors",
    subscribers_url: "https://api.github.com/repos/allfred1/BungerJS/subscribers",
    subscription_url: "https://api.github.com/repos/allfred1/BungerJS/subscription",
    commits_url: "https://api.github.com/repos/allfred1/BungerJS/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/allfred1/BungerJS/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/allfred1/BungerJS/comments{/number}",
    issue_comment_url: "https://api.github.com/repos/allfred1/BungerJS/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/allfred1/BungerJS/contents/{+path}",
    compare_url: "https://api.github.com/repos/allfred1/BungerJS/events",
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects")
  const [repos, setRepos] = useState([])
  const [sortOption, setSortOption] = useState("Relevance")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "productions", label: "Productions" },
  ]

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY)
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData)
          if (Date.now() - timestamp < CACHE_EXPIRATION) {
            setRepos(data)
            setIsLoading(false)
            return
          }
        }

        const response = await fetch("https://api.github.com/users/allfred1/repos")
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const data = await response.json()
        setRepos(data)
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }))
      } catch (error) {
        console.error("Error fetching data:", error)
        setError(error.message)
        const cachedData = localStorage.getItem(CACHE_KEY)
        if (cachedData) {
          const { data } = JSON.parse(cachedData)
          setRepos(data)
        } else {
          setRepos(fallbackData)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortOption === "Stars") {
      return b.stargazers_count - a.stargazers_count
    } else if (sortOption === "Date") {
      return new Date(b.created_at) - new Date(a.created_at)
    }
    return 0
  })

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>
  }

  return (
    <div className="contain p-12">
      <div className="title flex w-full flex-col items-start justify-center gap-4">
        <h1 className="text-5xl font-bold uppercase leading-8">PORTFOLIO</h1>
        <h2 className="text-xl font-medium leading-5">
          Here we have tried to collect all our works to make it easier for you to familiarize with them
        </h2>
      </div>

      <div className="categories mt-10 flex w-full flex-row items-center justify-between gap-4">
        <ul className="flex flex-row items-center gap-4">
          {tabs.map((tab) => (
            <motion.li
              key={tab.id}
              className="relative flex cursor-pointer flex-col items-center justify-center"
              onClick={() => setActiveTab(tab.id)}
              whileHover="hover"
            >
              <span className="text-[18px] capitalize">{tab.label}</span>
              {activeTab === tab.id ? (
                <motion.div
                  className="line absolute bottom-[-8px] h-1 w-[80%] rounded-md bg-black dark:bg-white"
                  layoutId="activeTab"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.div
                  className="line absolute bottom-[-8px] h-1 w-[80%] rounded-md bg-black bg-white"
                  initial={{ opacity: 0, scale: 0 }}
                  variants={{
                    hover: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.li>
          ))}
        </ul>
        <div className="filter">
          <DropMenu selectedOption={sortOption} setSelectedOption={setSortOption} />
        </div>
      </div>
      <div className="cards mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedRepos.map((repo) => (
          <Card key={repo.id} repo={repo} />
        ))}
      </div>
      {error && (
        <div className="mt-4 rounded-lg border-2 border-red-500 p-4 text-3xl">
          Note: There was an error fetching the latest data. Displaying cached or fallback data.
        </div>
      )}
    </div>
  )
}
