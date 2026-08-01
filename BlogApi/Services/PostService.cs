using BlogApi.Data;
using BlogApi.DTOs;
using BlogApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BlogApi.Services;

public class PostService : IPostService
{
    private readonly AppDbContext _context;

    public PostService(AppDbContext context)
    {
        _context = context;
    }


    public async Task<List<Post>> GetPosts()
    {
        return await _context.Posts
            .OrderByDescending(x => x.CreatedDate)
            .ToListAsync();
    }


    public async Task<Post?> GetPost(int id)
    {
        return await _context.Posts.FindAsync(id);
    }


    public async Task<Post> CreatePost(CreatePostDto dto)
    {
        var post = new Post
        {
            Title = dto.Title,
            Content = dto.Content
        };

        _context.Posts.Add(post);

        await _context.SaveChangesAsync();

        return post;
    }


    public async Task<bool> UpdatePost(int id, UpdatePostDto dto)
    {
        var post = await _context.Posts.FindAsync(id);

        if(post == null)
            return false;


        post.Title = dto.Title;
        post.Content = dto.Content;


        await _context.SaveChangesAsync();

        return true;
    }


    public async Task<bool> DeletePost(int id)
    {
        var post = await _context.Posts.FindAsync(id);

        if(post == null)
            return false;


        _context.Posts.Remove(post);

        await _context.SaveChangesAsync();

        return true;
    }
}